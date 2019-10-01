export default function factory(fn,args=[]){
    class Func extends fn {}    
    return function() {
        return new Func(...args.concat([...arguments]));
    }
}