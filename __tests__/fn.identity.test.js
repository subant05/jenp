import {identity} from '../src/fn/index';

test("Testing: fn.identity()", ()=>{
    expect(identity(2)).toBe(2)
})
