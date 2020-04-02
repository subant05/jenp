import * as fn from '../../fn/index'

function createObserver(){
    let node  = document.createElement("div")

    const container={}
    const handlers = [
                [], //next
                [], //error
                []  //complete
            ]
    const pipes = []
    const isComplete = false;

    class Observer {

        constructor(argNode){
            node = argNode || node
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
            const pipedFn = fn.compose(...arguments)
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
        
        emit(event="default",data){
            const eventInstance = new Event(event)
            eventInstance.data = data
            node.dispatchEvent(eventInstance)
        }
    }

    const subscription = new Observer()
    const handler = container
    return {subscription, handler}
}

export default function observable(node, event = "default", handler = ob=>ob.next()){
    if(!node)
        node = document.createElement("div")
        
    const observer = createObserver(node)
    node.addEventListener(event,(e)=>handler(observer.handler,e),false)

    return observer.subscription;
}
