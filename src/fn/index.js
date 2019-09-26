
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

export {default as join} from './join';
export {default as curry} from './curry';
export {default as seq} from './seq';
export {default as tap} from './tap';
export {default as identity} from './identity';
export {default as wrap} from './wrap';
export {default as always} from './always';
export {default as and} from './and';
export {default as or} from './or';
export {default as of} from './of';