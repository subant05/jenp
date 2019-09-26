import * as Functional from '../src/fn/index';

test("Testing: fn.or()", ()=>{
    expect(Functional.or(true,true)).toBe(true)
    expect(Functional.or(true,()=>true)).toBe(true)
    expect(Functional.or(true,()=>false)).toBe(true)
    expect(Functional.or(false,()=>true)).toBe(true)
    expect(Functional.or(()=>true,()=>true)).toBe(true)
    expect(Functional.or(()=>true,()=>'')).toBe(true)
    expect(Functional.or(()=>null,()=>'')).toBe(false)
    expect(Functional.or(undefined,()=>'')).toBe(false)
    expect(Functional.or(!undefined,()=>"Hello")).toBe(true)
    expect(Functional.or(!undefined,()=>"Hello",()=>true)).toBe(true)
})