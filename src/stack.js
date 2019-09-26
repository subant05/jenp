import * as func from './fn/index';
import * as monad from './monad/index';

const stack = {
    fn
    , monad
}

const global = global || window; 
global.stack = stack;