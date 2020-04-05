import {alt} from '../src/fn/index';

test("Tesing: fn.alt()", ()=>{
    expect(alt(
        function(a){ return null } ,
        function(b) {return b}
    )("b")).toBe("b")
})
