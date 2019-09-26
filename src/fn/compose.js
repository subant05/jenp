export default function compose (){

    const args = arguments;
    let count = arguments.length -1,
        result;

    return function (){
        do {
            if(typeof args[count] != "function")
                continue;

            result = args[count](result);
        } while(--count >= 0)
        return result;
    }
}
