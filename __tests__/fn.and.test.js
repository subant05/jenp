import * as Functional from '../src/fn/index';

test("Testing: fn.and()", ()=>{
    expect(Functional.and(true,true)).toBe(true)
    expect(Functional.and(true,()=>true)).toBe(true)
    expect(Functional.and(true,()=>false)).toBe(false)
    expect(Functional.and(false,()=>true)).toBe(false)
    expect(Functional.and(()=>true,()=>true)).toBe(true)
    expect(Functional.and(()=>true,()=>'')).toBe(false)
    expect(Functional.and(()=>null,()=>'')).toBe(false)
    expect(Functional.and(undefined,()=>'')).toBe(false)
    expect(Functional.and(!undefined,()=>"Hello")).toBe(true)
    expect(Functional.and(!undefined,()=>"Hello",()=>true)).toBe(true)
})