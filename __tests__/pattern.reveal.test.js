import  * as Pattern from '../src/pattern/index';

test("Testing: pattern.reveal()", ()=>{
    let message;
    class Messenger {
        constructor(exec){
            this.message = "Hello World!"
        }

        getMessage(){
            return this.message
        }
    }

    const msg = Pattern.reveal(Messenger,['getMessage'])
    msg(a=>message = a())

    expect(message).toBe("Hello World!")
})