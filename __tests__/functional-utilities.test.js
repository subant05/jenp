import * as Functional from '../src/utilities/functional/index';

test('Testing: utilities.functional.compose()', () => {
    expect(Functional.compose(
        function(statement){
            return function(c){
               return  statement + (c * 2).toString();
            } 
        }("Count is: "),
        function (b) { return b+b},
        ()=>1
    )()).toBe("Count is: 4");
});

test("Tesing: utilities.functional.alt()", ()=>{
    expect(Functional.alt(
        function(a){ return null } ,
        function(b) {return b}
    )("b")).toBe("b")
})

test("Tesing: utilities.functional.join()", ()=>{
    expect(Functional.join(
        (a,b)=>a/b
        , data=>data.reduce((accum,curr)=>accum+curr)
        , data=>data.length
    )([1,2,3])).toBe(2)
})

test("Tesing: utilities.functional.curry()", ()=>{
    const a = Functional.curry((a,b,c)=>a+b+c),
        b = Functional.curry(a(2)),
        c = b(2);
    expect(c(2)).toBe(6)
})