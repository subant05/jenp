export default function alt (funcA,funcB){
    return function(data){
        return funcA(data) || funcB(data)
    }
}