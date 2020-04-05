import {and} from '../src/fn/index';

test("Testing: fn.and()", ()=>{
    expect(and(true,true)).toBe(true)
    expect(and(true,()=>true)).toBe(true)
    expect(and(true,()=>false)).toBe(false)
    expect(and(false,()=>true)).toBe(false)
    expect(and(()=>true,()=>true)).toBe(true)
    expect(and(()=>true,()=>'')).toBe(false)
    expect(and(()=>null,()=>'')).toBe(false)
    expect(and(undefined,()=>'')).toBe(false)
    expect(and(!undefined,()=>"Hello")).toBe(true)
    expect(and(!undefined,()=>"Hello",()=>true)).toBe(true)
})