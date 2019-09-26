
/**
 * @module fn
 */
export {
        /**
     * This function takes a collection of functions, which are executed through a loop where the previous result of one function is passed to the next. The direction of the is bottom up where last function is executed first.
     * @function 
     * @param {...function} functionCollection - Is a collection for funcions
     * @returns {any}
     */
    default as compose
} from './compose';

export {
    /**
     * This function will compare the results of 2 functions and return the one that has a value that is neither null or undefined.
     * @function
     * @param {function} funcA - The first function that will be compared.
     * @param {function} funcB - The second function that will be compared.
     * @returns {any}
     */
    default as alt
} from './alt';

export {
    /**
     * This function will combines the results of functions funcA and funcB and return final result.
     * @function
     * @param {function} join - function manipulates the results of funcA & funcB and returns the results.
     * @param {function} funcA - function takes data passed into and returns a result.
     * @param {function} funcB - function takes data passed into and returns a result.
     * @returns {any}
     */
    default as join
} from './join';

export {
    /**
     * This function takes a function and returns an a partial function of that function. 
     * @function
     * @param {function} curry - function we want to parital
     * @param {any[]} [arguments] - optional array of arguments that will are passed to the curried function
     * @returns {function}
     */
    default as curry
} from './curry';

export {
    /**
     * This function will loop through the series of functions passed in a arguments. Each function will be executed with the same data passed in as an argument.
     * This function will return the original data that was passed into the series of funtions that were passed in as arguments.
     * @function
     * @param {...function} functions - function manipulates the results of funcA & funcB and returns the results.
     * @returns {function}
     */
    default as seq
} from './seq';

export {
    /**
     * This function returns a function that will use either the passed in report function or console.log to log the current value passed tho the anonymous function it returns
     * @function
     * @param {function} report - function manipulates the results of funcA & funcB and returns the results.
     * @returns {function}
     */
    default as tap
} from './tap';

export {
    /**
     * This function returns a function that console.logs the value passed in as an argument
     * @function
     * @returns {function}
     */
    default as identity
} from './identity';

export {default as wrap} from './wrap';
export {default as always} from './always';
export {default as and} from './and';
export {default as or} from './or';
export {default as of} from './of';