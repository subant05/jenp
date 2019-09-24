import * as func from './utilities/functional/index';

const stack = {
    func
}

const global = global || window; 
global.stack = stack;