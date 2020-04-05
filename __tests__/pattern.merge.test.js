import * as Pattern from '../src/pattern/index'
import { exportAllDeclaration } from '@babel/types';

test ("Testing: pattern.merge()", ()=>{
    function P (name){
        this.fullname = name
    }
    P.prototype.hello = function(){return "hello"}
    function O(title){
        this.title = title;
    }
    O.prototype.bye = function(){return "bye"; }
    O.prototype.getLocation = function(){throw new Error("Not Implemented")}
    
    function N(location){
        this.location =  location;
    }
    N.prototype.getLocation = function(){
        return this.location;
    }
    
    const merger = Pattern.merge(P,O,N);
    const executedPON = merger("Anthony")("Developer")("United Stated of America");

    expect(executedPON.getLocation()).toBe("United Stated of America");
    expect(executedPON.title).toBe("Developer");
    expect(executedPON.hello()).toBe("hello");
    expect(executedPON.bye()).toBe("bye");
    expect(executedPON.fullname).toBe("Anthony");
})