import  * as Pattern from '../src/pattern/index';

test("Testing: pattern.reveal()", ()=>{
    let message;
    class Messenger {
        constructor(){
            this.message = "Hello World!"
        }

        getMessage(message ){
            return message || this.message
        }

        setMessage(message ){
            this.message =  message || this.message
        }
    }

    const msg = Pattern.reveal(Messenger,['getMessage'])
    const msg2 = Pattern.reveal(Messenger,['setMessage'])
    msg(a=>message = a())
    expect(message).toBe("Hello World!")
    expect(msg2(a=>a("What's Up")).message).toBe("What's Up")


})