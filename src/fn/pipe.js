export default function pipe (){
    const args = arguments;
    let count = args.length -1,
        result;

    return function (data){
        let iterator = 0
        if(data)
            result = data;

        do {
            if(typeof args[iterator] != "function")
                continue;

            result = args[iterator](result);
        } while(++iterator <= count)

        return result;
    }
}
