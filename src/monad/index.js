/**
 * @module monad
 */
export {
    /**
     *  @description This monad Maybe and values of that type can either contain a value, or be an empty value.  A value of any type other then undefined or null, which is defined but used in the context of Maybe is Just. 
     * @class Maybe
     * @memberof module:monad
     */
    default as Maybe
} from './Maybe';

export {
    /**
     *  @description Either can be of 2 possibilities. The value is represented as either Left, which is error or Right which is an correct.Right is always favored
     * @class Either
     * @memberof module:monad
     */
    default as Either
} from './Either';

export {
    /**
     *  @description IO is monad that is simply an abstract data type. Actions are defined rather than invoked. IO is a good choice to handle DOM mutation and reducing side effects.
     * @class IO
     * @memberof module:monad
     */
    default as IO
} from './IO';

