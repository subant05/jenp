import {or} from '../src/fn/index';

test("Testing: fn.or()", ()=>{
    expect(or(true,true)).toBe(true)
    expect(or(true,()=>true)).toBe(true)
    expect(or(true,()=>false)).toBe(true)
    expect(or(false,()=>true)).toBe(true)
    expect(or(()=>true,()=>true)).toBe(true)
    expect(or(()=>true,()=>'')).toBe(true)
    expect(or(()=>null,()=>'')).toBe(false)
    expect(or(undefined,()=>'')).toBe(false)
    expect(or(!undefined,()=>"Hello")).toBe(true)
    expect(or(!undefined,()=>"Hello",()=>true)).toBe(true)
})