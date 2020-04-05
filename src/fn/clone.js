import or from './or'
import curry from './curry'
import compose from './compose'

function checkObject(obj){
    return or(typeof obj !== "object", obj instanceof Array) ? null : obj
}

const clone = compose(
    curry(Object.assign, [{}])
    , checkObject
)

export {clone as default }