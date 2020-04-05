import {join}from '../src/fn/index';

test("Tesing: fn.join()", ()=>{
    expect(join(
        (a,b)=>a/b
        , data=>data.reduce((accum,curr)=>accum+curr)
        , data=>data.length
    )([1,2,3])).toBe(2)
})