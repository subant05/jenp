import * as fn from '../fn/index'

function createObserver(nodeArg, eventArg){
    const node = nodeArg
    , event = eventArg
    , container={}
    , handlers = [
                [], //next
                [], //error
                []  //complete
            ];

    class Observer {

        constructor(argNode){
            container.complete = this.complete.bind(this)
            container.next = this.next.bind(this)
            container.error = this.error.bind(this)

            delete this.complete
            delete this.next
            delete this.error
        }

        complete(){
            handlers[2].forEach(fn=>{
                fn(data)
            })

            this.complete = undefined
        }

        next(data){
            handlers[0].forEach(fn=>{
                fn(data)
            })
        }

        error(err){
            handlers[1].forEach(fn=>{
                fn(data)
            })
        }

        pipe(){
            const pipedFn = fn.pipe(...arguments)
            const that = this
            return {
                subscribe(){
                    arguments[0] = fn.compose(arguments[0],pipedFn)
                    that.subscribe(...arguments)
                }
            }
        }

        subscribe(){
            [...arguments].forEach((fn,index)=>{
                handlers[index].push(fn)
            })
        }
        
        emit(data, eventArg){
            const eventInstance = new Event(eventArg|| event)
            eventInstance.data = data
            node.dispatchEvent(eventInstance)
        }
    }

    const subscription = new Observer()
    , handler = container;

    return {subscription, handler}
}

function observable(handler = ob=>ob.next(), config = {event:"default"}){
    const node = config.node || document.createElement("div")
    , event = config.event
    , observer = createObserver(node, event);

    node.addEventListener(config.event,(e)=>handler(observer.handler,e),false)

    return observer.subscription;
}

export {observable}