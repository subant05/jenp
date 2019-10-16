export default class Maybe {

    static just(value){
        return new Just(value)
    }

    static nothing(){
        return new Nothing()
    }

    static fromNullable(value){
        return  value != null ? Maybe.just(value) : Maybe.nothing()
    }
    
    static of(value){
        return Maybe.just(value)
    }
    
    get just(){
        return false;
    }

    get nothing(){
        return false;
    }
}

class Just extends Maybe{
    
    constructor(value){
        super()
        this._value = value;
    }

    get value(){
        return this._value
    }

    map(fn){
       return Maybe.fromNullable(fn(this._value))
    }

    filter(fn){
        return Maybe.fromNullable(fn(this._value) ? this._value : null)
    }

    chain(fn){
        return fn(this._value)
    }

    getOrElse(){
        return this._value;
    }

    toString() {
        return `Just: ${this._value}`;
    }
}

class Nothing extends Maybe {
    constructor(){
        super()
    }
    map(){
        return this;
    }

    filter(){
        return this;
    }

    chain(){
        return this;
    }

    get(){
        throw new Error("Can not get value of null or Undefined")
    }
    
    getOrElse(other){
        return other
    }

    toString() {
        return `Nothing: null`;
    }
}