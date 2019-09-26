export default class IO {
    constructor(action){
        if(typeof action !== 'function')
            throw new Error("functions can only be used with IO")

        this.action = action
    }

    static of(action){
        return new IO(()=>a)
    }

    static from(fn) {
        return new IO(fn)
    }

    map(fn) {
        const that = this;
    
        return new IO(()=>fn(that.action()))
    }

    chain(fn) {
        return fn(this.action())
    }

    run() {
        return this.action()
    }
}