import * as func from './fn/index';

const stack = {
    func
}

const global = global || window; 
global.stack = stack;