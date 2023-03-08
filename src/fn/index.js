/**
 * @module fn
 */

export {
  /**
   *  @description This takes a value and returns an anonymoyus function that when executed will always return the original value that was initial passed. Equivelant to setting and getting a constant
   * @function
   * @param {any} value - data/value that is to be wrapped by the functor
   * @returns {function} - When executed will return value passed into the wrapped function
   */
  default as always,
} from "./always";

export {
  /**
   *  @description This function will compare the results of 2 functions and return the one that has a value that is neither null or undefined.
   * @function
   * @param {function} funcA - The first function that will be compared.
   * @param {function} funcB - The second function that will be compared.
   * @returns {any}
   */
  default as alt,
} from "./alt";

export {
  /**
   *  @description This takes a number of values that can be of any type. It will check the values themselves or the results of the functions to determine if all conditions match.
   * @function
   * @param {...any} value - number of arguments that can be of any type.
   * @returns {boolean}
   */
  default as and,
} from "./and";

export {
  /**
   * @description This function takes a collection of functions, which are executed through a loop where the previous result of one function is passed to the next. The direction of the is bottom up where last function is executed first.
   * @function
   * @param {...function} functionCollection - Is a collection for funcions
   * @returns {any}
   */
  default as clone,
} from "./clone";

export {
  /**
   * @description This function takes a collection of functions, which are executed through a loop where the previous result of one function is passed to the next. The direction of the is bottom up where last function is executed first.
   * @function
   * @param {...function} functionCollection - Is a collection for funcions
   * @returns {any}
   */
  default as compose,
} from "./compose";

export {
  /**
   * @description This function takes a collection of async functions, which are executed through a loop where the previous result of one function is passed to the next. The direction of the is bottom up where last function is executed first.
   * @function
   * @param {...function} functionCollection - Is a collection for funcions
   * @returns {any}
   */
  default as asyncCompose,
} from "./asyncCompose";

export {
  /**
   *  @description This function takes a function and returns an a partial function of that function.
   * @function
   * @param {function} curry - function we want to parital
   * @param {any[]} [arguments] - optional array of arguments that will are passed to the curried function
   * @returns {function}
   */
  default as curry,
} from "./curry";

export {
  /**
   *  @description This function returns a function that console.logs the value passed in as an argument
   * @function
   * @returns {function}
   */
  default as identity,
} from "./identity";

export {
  /**
   *  @description This function will combines the results of functions funcA and funcB and return final result.
   * @function
   * @param {function} join - function manipulates the results of funcA & funcB and returns the results.
   * @param {function} funcA - function takes data passed into and returns a result.
   * @param {function} funcB - function takes data passed into and returns a result.
   * @returns {any}
   */
  default as join,
} from "./join";

export {
  /**
   *  @description This takes a value of any type and it will return that same value wrapped in an array
   * @function
   * @param {...any} value - number of arguments that can be of any type.
   * @returns {array}
   */
  default as of,
} from "./of";

export {
  /**
   *  @description This takes a number of values that can be of any type. It will check the values themselves or the results of the functions to determine if any of the conditions art true.
   * @function
   * @param {...any} value - number of arguments that can be of any type.
   * @returns {boolean}
   */
  default as or,
} from "./or";

export {
  /**
   * @description This function takes a collection of functions, which are executed through a loop where the previous result of one function is passed to the next. The direction of the is top dowm where first function is executed first.
   * @function
   * @param {...function} functionCollection - Is a collection for funcions
   * @returns {any}
   */
  default as pipe,
} from "./pipe";

export {
  /**
   *  @description This function will loop through the series of functions passed in a arguments. Each function will be executed with the same data passed in as an argument. This function will return the original data that was passed into the series of funtions that were passed in as arguments.
   * @function
   * @param {...function} functions - function manipulates the results of funcA & funcB and returns the results.
   * @returns {function}
   */
  default as seq,
} from "./seq";

export {
  /**
   *  @description This function returns a function that will use either the passed in report function or console.log to log the current value passed tho the anonymous function it returns
   * @function
   * @param {function} report - function manipulates the results of funcA & funcB and returns the results.
   * @returns {function}
   */
  default as tap,
} from "./tap";

export {
  /**
   *  @description This a functor that accepts a value and returns that value in a monad. Use fmap to manipulate the value and return a new value without mutating the original
   * @function
   * @param {any} value - data/value that is to be wrapped by the functor
   * @returns {object} - Instance that can be used to accept functions using fmap to manipulate the original value without mutation
   */
  default as wrap,
} from "./wrap";
