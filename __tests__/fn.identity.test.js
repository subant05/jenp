import * as Functional from '../src/fn/index';

test("Testing: fn.identity()", ()=>{
    expect(Functional.identity(2)).toBe(2)
})
