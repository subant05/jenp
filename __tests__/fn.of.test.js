import {of} from '../src/fn/index';

test("Tesing: fn.of()", ()=>{
    expect(of(2)[0]).toBe(2)
    expect(of([2])[0][0]).toBe(2)
})