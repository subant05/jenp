import * as Pattern from '../src/pattern/index'

test ("Testing: patter.middleware()",()=>{
    let greeting,
        fullGreeting;

    function updateGreeting(data){greeting = data + ", John."}
    function updateFullGreeting(data){fullGreeting = data + ", John Doe."}

    const mwm = Pattern.middleware({
        behaviors: {
            greet: {
                sayHello:function(data,cb = a=>a){
                    cb(data)
                }
            }
        }
    })

    mwm.use({
        outbound(data,next){
            updateFullGreeting(data)
            next()
        }
    })

    mwm.sayHello("Hello",updateGreeting)

    expect(fullGreeting).toBe(undefined)
    expect(greeting).toBe("Hello, John.")

    mwm.use({
        greet(data,next){
            updateFullGreeting(data)
            next()
        }
    })

    mwm.sayHello("Hello",updateGreeting)

    expect(fullGreeting).toBe("Hello, John Doe.")

})