export default function reveal(fn,hideMethods=[]) {

    class Func extends fn {
            constructor(exec) {
                super()

                const revealedMethods = [];

                hideMethods.forEach((m)=>{
                    revealedMethods.push(this[m].bind(this));
                    this[m] = undefined;
                })

                revealedMethods.push(a=>a)

                return exec(...revealedMethods)
            }
        }  

    return function(exec) {
        return new Func(exec);
    }
}