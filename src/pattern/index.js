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


export {
    /**
     * @description This function follows the revealing constructor pattern , used by class like Promise where we pass back a method as a callback but limit direct access to it via class instance.
     * @function 
     * @param {function} class - Is a function/class that will be extended and whose selected methods will be removed from the instance of the function/class
     * @param {array} methods  - Are methods that will be passed back as callbacks to the executor function
     * @returns {function} - which accepts a callback that the function will execute
     */
    default as reveal
} from './reveal'


export {
    /**
     * @description This function will create a clone of an object and add proxy in front of that obhect. Handlers for various actions such as get, set and be passed through in the second argument
     * @function 
     * @param {object} obj - This is the object that will be cloned and referenced by the return proxy object
     * @param {object} methods  - This is an object that contains the handler for certain actions that you want to perform some logic before being passed through to the targeted object
     * @returns {object} -Is the proxy object that you would use to access the targeted object
     */
    default as proxy
} from './proxy'

export {
    /**
     * @description This function will decorate a function with additional functionality, which is passed through the decoration argument.
     * @param {function} fn - This is a function or class that will be decorated
     * @param {array} args  - This is an array of arguments that will passed to the instantiated decorator
     * @param {object} decoration  - This is an object that contains functions that will be added to the decorator instance
     * @returns {object} -An instance of the decorator that has been created within the decorator function
     */
    default as decorate
} from './decorate'