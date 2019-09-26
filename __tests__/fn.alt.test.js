import * as Functional from '../src/fn/index';

test("Tesing: fn.alt()", ()=>{
    expect(Functional.alt(
        function(a){ return null } ,
        function(b) {return b}
    )("b")).toBe("b")
})
