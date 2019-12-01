// Use IO pattern

class Reaction {
    constructor (node,event){
        this.node = node;
        this.event = new Event(event);
        return this;
    }
    subscribe(fn) {
        this.node.addEventListener(this.event,fn)
        return this;
    }

    publish(data){
        const event =  new Event(this.event, {"bubbles":true, "cancelable":false})
        event.data = data;
        this.node.dispatchEvent(event)
    }
}

function fromEvent(node,event){
    const event =  document.createEvent(event)
    return this;
}   