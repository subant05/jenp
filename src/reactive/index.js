/** 
 * @module reactive 
 * */


export {
    /**
     * @function
     * @description observable() - This will create an observable of a nodes event that can be subscribed to and whose data can be operated on prior to executing subscriber handler
     * @param {object} node - This is the node that will be listened to for an event. If not node is available, assign null.
     * @param {string} event - The name of the event
     * @param {function} handler - The event handler for the triggered event. Here the observer object will be passed as first argument and you can execute (next(), error(), complete()) to alert the subscribers.
     * @returns {object} - returns an object that contains the subscriber() and pipe()
     * 
     */
    observable
} from './observable'

export {
    /**
     * @function
     * @description operator() - This will create an operator based on the function passed into it, which will be used within the pipe() prior to exection of a subscription handler
     * @param {function} opertation - This function contain 1 argument which is the function that will work on a variable named data which will be passed to the function,
     * @returns {function} - returns an function that takes a single arguments and passes that argument to the operating function
     * 
     */
    operator 
} from './operators'

export {
    /**
     * @function
     * @description map() - This will create an operator that works the same as Array.prototype.map.
     * @param {function} opertation - This function contains 1 argument which is the function that will work on a variable named data which will be passed to the function,
     * @returns {function} - returns an function that takes a single arguments and passes that argument to the operating function
     * 
     */
    map
} from './operators'

export {
    /**
     * @function
     * @description filter() - This will create an operator that works the same as Array.prototype.filter.
     * @param {function} opertation - This function contains 1 argument which is the function that will work on a variable named data which will be passed to the function,
     * @returns {function} - returns an function that takes a single arguments and passes that argument to the operating function
     * 
     */
    filter
} from './operators'

export {
    /**
     * @function
     * @description find() - This will create an operator that works the same as Array.prototype.find.
     * @param {function} opertation - This function contains 1 argument which is the function that will work on a variable named data which will be passed to the function,
     * @returns {function} - returns an function that takes a single arguments and passes that argument to the operating function
     */
    find
} from './operators'