/**
 * @module pattern
 */

export {
    /**
     * @description This function returns an anonymous function. When curried returned function is executed it instantiates an instance of that function/class passed in on initial function and uses the arguments passed in initial execution or in the return anonymous function. 
     * @function 
     * @param {function} class - Is a function/class that will be instantiated on the execution on returned function
     * @param {...any} arguments  - Are aguments that will be passed to the class during instantiation
     * @returns {function}
     */
    default as factory
} from './factory'