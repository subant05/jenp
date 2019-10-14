export default function merge(fn=a=>a) {
    const fns = [...arguments],
        executedFns = [];

    function F(){}
    fns.forEach((currFn, index)=>Object.assign(F.prototype,currFn.prototype));
    
    let f = new F;

    function executeFns() {
        if(arguments.length === fns[0].length){

            Object.assign(f,new fns[0](...arguments));
            executedFns.push(fns.shift());

        }
    }

    function R(){
        executeFns(...arguments);
        if(fns.length)
            return R;

        fns.concat(executedFns);
        executedFns.length = 0;
        return f;
    }

    return R;
}