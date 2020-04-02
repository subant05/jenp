import * as fn from './fn/index';
import * as monad from './monad/index';
import * as pattern from './pattern/index';


const stack = {
    fn
    , monad
    , pattern
}

const global = global || window; 
global.stack = stack;