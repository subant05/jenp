export default function factory(fn,args=[]){

    function Func() {
        return fn.apply(this, args);
    }
    Func.prototype = fn.prototype;

    return function() {
        args = args.concat(Array.from(arguments))
        return new Func();
    }
}