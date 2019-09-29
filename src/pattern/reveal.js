export default function reveal(fn,hideMethods=[]) {

    class Func extends fn {
            constructor(exec) {
                super()

                const revealedMethods = [];
                const that = this;

                hideMethods.forEach(function(m){
                    revealedMethods.push(that[m].bind(that));
                    that[m] = undefined;
                })

                revealedMethods.push(a=>a)

                exec(...revealedMethods)
            }
        }  
        return function(exec) {
            return new Func(exec);
        }
}