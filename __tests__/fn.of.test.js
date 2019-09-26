import * as Functional from '../src/fn/index';

test("Tesing: fn.of()", ()=>{
    expect(Functional.of(2)[0]).toBe(2)
    expect(Functional.of([2])[0][0]).toBe(2)
})