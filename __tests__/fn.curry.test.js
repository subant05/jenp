import * as Functional from '../src/fn/index';

test("Tesing: fn.curry()", ()=>{
    const a = Functional.curry((a,b,c)=>a+b+c),
        b = Functional.curry(a(2)),
        c = b(2);
    expect(c(2)).toBe(6)
})