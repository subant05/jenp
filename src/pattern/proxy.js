export default function proxy(obj={},handler={}){
    handler.set = a=>a
    return new Proxy(obj, handler)
}