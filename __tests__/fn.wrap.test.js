import * as Functional from '../src/fn/index';

test("Testing: fn.wrap()", ()=>{
    const wrap = Functional.wrap(2);
    let originalWrap,
        chainedWrap;

    wrap.fmap((data)=>data*2).fmap(data=>data*6).fmap(data=>data*2).fmap(data=>data/12).fmap(data=>{chainedWrap = data});
    wrap.map((data)=>{originalWrap = data})

    expect(originalWrap).toBe(2)
    expect(chainedWrap).toBe(4)
})