export default function join (joiner,funcA,funcB){
    return function(data){
        return joiner(funcA(data),funcB(data))
    }
}