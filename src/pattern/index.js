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
     * @param {function} classOrFunction - Is a function/class that will be extended and whose selected methods will be removed from the instance of the function/class
     * @param {array} methods  - Are methods that will be passed back as callbacks to the executor function
     * @returns {function} - which accepts a callback that the function will execute
     */
    default as revealingConstructor
} from './revealing-constuctor'