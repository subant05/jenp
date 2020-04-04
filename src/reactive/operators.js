function returnArrayFunction(method,fn){
    return function (data){
        return data[method](fn)
    }
}

export function map(fn){
    return returnArrayFunction('map',fn)
}

export function filter(fn){
    return returnArrayFunction('filter',fn)

}

export function find(fn){
    return returnArrayFunction('find',fn)
}

export function operator(fn){
    return function (data){
        return fn(data)
    }
}