export default function tap(report){
    return function (data){
       typeof report === 'function' ? report(data) : console.log(data)
       return data;
    }
}