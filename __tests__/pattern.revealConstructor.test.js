import  * as Pattern from '../src/pattern/index';

test("Testing: pattern.revealingConstructor()", ()=>{
    let message;
    class Messenger {
        constructor(exec){
            this.message = "Hello World!"
        }

        getMessage(){
            return this.message
        }
    }

    const msg = Pattern.revealingConstructor(Messenger,['getMessage'])
    msg(a=>message = a())

    expect(message).toBe("Hello World!")
})