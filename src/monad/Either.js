export default class Either {

    get value(){
        return this._value;
    }

    static right(value){
        return new Right(value);
    }

    static left(value){
        return new Left(value);
    }

    static fromNullable(value){
       return  value !== null && typeof value !== "undefined" ? Either.right(value) : Either.left(value);
    }

    static of(value) {
        return Either.right(value);
    }
}

class Left extends Either {
    constructor(value){
        super();
        this._value = value;
    }

    map() {
        return this;
    }

    get value() {
        throw new Error("Can not extract a left value");
    }

    chain(){
        return this;
    }

    getOrElse(other){
        return other;
    }

    getOrElseThrow(other="Error"){
        throw new Error(other);
    }

    orElse(fn){
        return fn(this._value);
    }
    
    filter(){
        return this;
    }

    toString(){
        return `Left: ${this._value}`;
    }
}

class Right extends Either {
    constructor(value){
        super();
        this._value = value;
    }
    
    map(fn){
        return Either.fromNullable(fn(this._value));
    }

    getOrElse(){
        return this._value;
    }
    
    chain(fn) {
        return fn(this._value);
    }

    getOrElseThrow(){
        return this._value;
    }

    orElse(){
        return this;
    }

    filter(fn){
        return Either.fromNullable(fn(this._value) ? this._value : null);
    }
    
    toString(){
        return `Right: ${this._value}`;
    }
}