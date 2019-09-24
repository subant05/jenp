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