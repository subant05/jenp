import * as fn from './fn/index';
import * as monad from './monad/index';
import * as pattern from './pattern/index';
import * as reactive from './reactive/index';


const stack = {
    fn
    , monad
    , pattern
    , reactive
}

const global = global || window; 
global.stack = stack;
global._s = stack; 