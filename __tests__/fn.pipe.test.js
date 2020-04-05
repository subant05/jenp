import {pipe} from '../src/fn/index';

test('Testing: fn.pipe()', () => {
    expect(pipe(
        ()=>1,
        function (b) { return b+b},
        function(statement){
            return function(c){
               return  statement + (c * 2).toString();
            } 
        }("Count is: ")
     )()).toBe("Count is: 4");
});