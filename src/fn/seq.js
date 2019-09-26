export default function seq(){
    const fns = arguments;

    return function(data) {
        for(let i = 0, len = fns.length; i < len; i++){
            fns[i](data)
        }

        return data;
    }
}