export default function compose (defaultFunction = [a=>a] ){
    const args = arguments;
    let count = arguments.length -1,
        result

    return function (){
        do {
            result = args[count](result);
        } while(--count >= 0)
        return result;
    }
}
