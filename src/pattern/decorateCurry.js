export default function deccorateCurry(fn,decoration={}){

    function Decorator(){
        fn.apply(this,arguments)
    }

    Decorator.prototype = Object.assign(fn.prototype,decoration);

    return function(){
        return new Decorator(...arguments)
    }
}