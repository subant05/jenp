export default function or(){
    return Array
    .from(arguments)
    .filter(item=> typeof item === 'function' ?  Boolean(item()) : Boolean(item) )
    .length >=1;
}