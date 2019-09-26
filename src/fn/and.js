export default function and(){
    return Array
        .from(arguments)
        .filter(item=> typeof item === 'function' ?  Boolean(item()) : Boolean(item) )
        .length === arguments.length;
}