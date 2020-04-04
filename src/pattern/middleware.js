import {default as Maybe} from "../monad/Maybe";
import * as fn from "../fn/index";

function isFillObject(obj){
    return fn.and(obj instanceof Object, Object.keys(obj).length);
}

function iteratorOverMiddleware(middleware, args, finish, index) {
    if(!middleware || !middleware instanceof Array || index === middleware.length)
        return finish && finish(args);
    
    middleware[index].call(this,...args,err=>{
        if(err)
            throw new Error("Error: ", err.message);

        return iteratorOverMiddleware.call(this, middleware, args, finish, ++index);
    });
}

function verifyConfig(config){
    return config && isFillObject(config);
}

function verifyMiddlewareInstance(middlewareInstance){
    return middlewareInstance && typeof middlewareInstance.executeMiddlewares === 'function';
}

function verifySetup(config, middlewareInstance){
    return (fn.or(!verifyConfig(config),!verifyMiddlewareInstance(middlewareInstance))) ? null : middlewareInstance;
}

function removeReservedProperties(config){
    return function(middlewareInstance){
        
        ["use", "executeMiddlewares", "events"].forEach(defaultBehaviors=>delete config.behaviors[defaultBehaviors]);
        return middlewareInstance;
    }
}

function setUpMiddlewareInstance(){
   return {
        events : {}
        , use(middleware){
            if(!isFillObject(middleware)) return;

            for(let ev in middleware){
                if(!(ev in this.events)) {
                    this.events[ev] =[];
                }

                this.events[ev].push(middleware[ev]);
            }
        }
        , executeMiddlewares(middleware,args,finish){
            iteratorOverMiddleware.call(this, middleware, args, finish, 0);
        }
    }
}

function addMiddlewareBehaviors(config){
    return function (middlewareInstance){
        for(let event in config.behaviors)
            for(let behavior in config.behaviors[event]){
                middlewareInstance[behavior] = function() { 

                    const data = [...arguments];
                    const cb = (typeof data[data.length-1] === 'function') ? data.pop() : a=>a;

                    this.executeMiddlewares(this.events[event]
                            , data
                            , (args)=>config.behaviors[event][behavior](...args,cb)
                    );
                        
                }

        }
        return middlewareInstance;
    }
}

function setupMiddlewareBehaviors(config) {
    return function(middlewareInstance){
        return Maybe.fromNullable(verifySetup(config,middlewareInstance))
                .map(removeReservedProperties(config))
                .map(addMiddlewareBehaviors(config))
                .getOrElse(null);

    }
}

export default function middlewareManager(config){    
    return Maybe.fromNullable(config)
        .map(setUpMiddlewareInstance)
        .map(setupMiddlewareBehaviors(config))
        .getOrElse(null);

}