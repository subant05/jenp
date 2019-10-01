export default function deccorateCurry(fn,decoration={}){
    const proto =  Object.getPrototypeOf(fn)

    function Decorator(){
        fn.apply(this,arguments)
    };
    Decorator.prototype = Object.assign(fn.prototype,decoration);

    return function(){
        return new Decorator(...arguments)
    }
}