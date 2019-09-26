import * as Functional from '../src/fn/index';

test('Testing: fn.compose()', () => {
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