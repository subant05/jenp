import {curry} from '../fn/index'

export function map(fn){
    return curry((fn,data)=>{
        if(data instanceof Array)
            return data.map(fn)
        else
            return data
    })(fn)
}
