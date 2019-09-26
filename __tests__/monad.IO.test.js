import * as Monad from '../src/monad/index';
import * as Functional from '../src/fn/index'

test("Testing: monad.IO", ()=>{
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

    const readCurried =  Functional.curry(read, [document])
    const writeCurried = Functional.curry(write, [document])
    const addHelloStatement = Monad
        .IO
        .from(readCurried("#io"))
        .map(greet)
        .map(writeCurried("#io"))
    
    addHelloStatement.run()
    expect(document.querySelector("#io").innerHTML).toBe("Hello, Tony Stark.")
})