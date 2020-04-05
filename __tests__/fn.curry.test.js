import {curry} from '../src/fn/index';

test("Tesing: fn.curry()", ()=>{
    const a = curry((a,b,c)=>a+b+c),
        b = curry(a(2)),
        c = b(2);
    expect(c(2)).toBe(6)
})