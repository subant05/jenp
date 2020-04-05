import {wrap} from '../src/fn/index';

test("Testing: fn.wrap()", ()=>{
    const wrapping = wrap(2);
    let originalWrap,
        chainedWrap;

    wrapping.fmap((data)=>data*2).fmap(data=>data*6).fmap(data=>data*2).fmap(data=>data/12).fmap(data=>{chainedWrap = data});
    wrapping.map((data)=>{originalWrap = data})

    expect(originalWrap).toBe(2)
    expect(chainedWrap).toBe(4)
})