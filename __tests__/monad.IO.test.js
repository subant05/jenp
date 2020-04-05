import {IO} from '../src/monad/index';
import {curry} from '../src/fn/index'

test("Testing: IO", ()=>{
    document.body.innerHTML =`<div id="io">Hello</div>`;

    function read(document,selector) { 
        return function(){ 
            return document.querySelector(selector).innerHTML
        } 
    }

    function write(document,selector) { 
        return function(data){ 
            return document.querySelector(selector).innerHTML = data
        } 
    }

    function greet(data){
        return data+", Tony Stark."
    }

    const readCurried =  curry(read, [document])
    const writeCurried = curry(write, [document])
    const addHelloStatement = IO
        .from(readCurried("#io"))
        .map(greet)
        .map(writeCurried("#io"))
    
    addHelloStatement.run()
    expect(document.querySelector("#io").innerHTML).toBe("Hello, Tony Stark.")
})