import {always} from '../src/fn/index';

test("Testing: fn.always()",()=>{
    const CONSTANT =  always("CONSTANT")
    expect(CONSTANT()).toBe("CONSTANT")
})