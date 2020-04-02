export default function compose (){
    const args = arguments;
    let count = args.length -1,
        result;

    return function (data){
        let iterator = count
        if(data)
            result = data;

        do {
            if(typeof args[iterator] != "function")
                continue;

            result = args[iterator](result);
        } while(--iterator >= 0)

        return result;
    }
}
