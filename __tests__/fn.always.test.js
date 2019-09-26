import * as Functional from '../src/fn/index';

test("Testing: fn.always()",()=>{
    const CONSTANT =  Functional.always("CONSTANT")
    expect(CONSTANT()).toBe("CONSTANT")
})