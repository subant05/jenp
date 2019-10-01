export default function deccorate(fn,args=[],decoration={}){
    const proto =  Object.getPrototypeOf(fn)
    
    function Decorator(){
        fn.apply(this,arguments)
    };
    Decorator.prototype = Object.assign(fn.prototype,decoration);

    return new Decorator(...args)
}