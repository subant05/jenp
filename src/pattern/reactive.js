// Use IO pattern
import * as IO from '../src/monad/IO';
import * as Functional from '../src/fn/index'

class Reaction extends IO{

    pipe(){
        [...arguments].forEach(fn=>{
            if(typeof fn === "function")
                Reaction.map(fn)
        })
    }

    subscribe(fn) {
        this.node.addEventListener(this.event,fn)
        return this;
    }

    publish(data){
        this.event.data = data;
        this.node.dispatchEvent(event)
    }
}

function fromEvent(node,event){
    const eventType =  document.createEvent(event)
    return  Reaction.from(node,eventType)
}   