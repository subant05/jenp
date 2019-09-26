class Wrapper {
    constructor(value) {
        this._value = value;
    }

    map(fn) {
        return fn(this._value);
    }

    fmap(fn) {
        return new Wrapper(fn(this._value))
    }
}

export default function wrap(value){
    return new Wrapper(value);
}