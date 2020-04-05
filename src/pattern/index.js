/**
 * @module pattern
 */

export {
    /**
     * @description This function will decorate a function with additional functionality, which is passed through the decoration argument.
     * @function
     * @param {function} fn - This is a function or class that will be decorated
     * @param {array} args  - This is an array of arguments that will passed to the instantiated decorator
     * @param {object} decoration  - This is an object that contains functions that will be added to the decorator instance
     * @returns {object} -An instance of the decorator that has been created within the decorator function
     */
    default as decorate
} from './decorate'

export {
    /**
     * @description This function will decorate a function with additional functionality and will return a curried function used to instantiate the decorator.
     * @function
     * @param {function} fn - This is a function or class that will be decorated
     * @param {object} decoration  - This is an object that contains functions that will be added to the decorator instance
     * @returns {function} - Takes constructor arguments and instantiates the decorator functuin
     */
    default as decorateCurry
} from './decorateCurry'

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
     * @description This function will merge classes and functions together and return a recursive function that will take arguments for each function until all functions/class have been initiated.
     * @function
     * @param {...function} fns - This is a series of functions and classes that will be executed and their instance concatenated to one object
     * @returns {function | object} - If all arguments have been satified for each function, then the combined object will be return. Otherwise another recursive function will be return that will take the arguments for the next function in queue.
     */
    default as merge
} from './merge'

export {
    /**
     * @description This will craete a middleware pattern that can be used as an application itself or as an extension of an application. Provide a configuration object that will setup the middleware behaviors and each behaviors associated actions
     * @function
     * @param {object} config - This is an object that instructions the function on how to configure the middleware pattern based on behaviors and actions associated with those behaviors.
     * Example:
     * middleware({
     *       behaviors: {
     *          send: {
     *                submit:function(data,cb){
     *                    fetch("/api/submit",{method: post, body: JSON.stringify(data)})
     *                      .then(cb,(err)=>throw new Error(err.message))
     *                }
     *            }
     *        }
     *    })
     * @returns {object} - A middleware manager is returned where one can added add middleware using the use() method. Each middleware must use next() callback as its last argument.
     */
    default as middleware
} from './middleware'

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
     * @description This function follows the revealing constructor pattern , used by class like Promise where we pass back a method as a callback but limit direct access to it via class instance.
     * @function 
     * @param {function} class - Is a function/class that will be extended and whose selected methods will be removed from the instance of the function/class
     * @param {array} methods  - Are methods that will be passed back as callbacks to the executor function
     * @returns {function} - which accepts a callback that the function will execute
     */
    default as reveal
} from './reveal'
