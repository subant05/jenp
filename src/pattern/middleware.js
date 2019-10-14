function isFillObject(obj){
    return obj instanceof Object && Object.keys(obj).length 
}

function iteratorOverMiddleware(middleware, args, finish, index) {
    if(!middleware || !middleware instanceof Array || index === middleware.length)
        return finish && finish(args)
    
    middleware[index].call(this,...args,err=>{
        if(err)
            throw new Error("Error: ", err.message)

        return iteratorOverMiddleware.call(this, middleware, args, finish, ++index);
    });
}

export default function middlewareManager(config){    
    const middlewareInstance = {
        events : {}
        , use(middleware){
            if(!isFillObject(middleware)) return;

            for(let ev in middleware){
                if(!(ev in this.events)) {
                    this.events[ev] =[]
                }

                this.events[ev].push(middleware[ev])
            }
        }
        , executeMiddlewares(middleware,args,finish){
            iteratorOverMiddleware.call(this, middleware, args, finish, 0)
        }
    }

    if(isFillObject(config.behaviors)){
        ["use", "executeMiddlewares", "events"].forEach(defaultBehaviors=>delete config.behaviors[defaultBehaviors])

        for(let event in config.behaviors)
            for(let behavior in config.behaviors[event]){
                middlewareInstance[behavior] = function() { 

                    const data = [...arguments];
                    const cb = (typeof data[data.length-1] === 'function') ? data.pop() : a=>a;
                    this.executeMiddlewares(this.events[event], data, (args)=>config.behaviors[event][behavior](...args,cb));
                        
                }

        }
    }

    return middlewareInstance;
}