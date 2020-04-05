import {middleware} from '../src/pattern/index'

test ("Testing: middleware()",()=>{
    let greeting,
        fullGreeting,
        fullGreetingWithPeriod;

    function updateGreeting(data){greeting = data + ", John."}
    function updateFullGreeting(data){fullGreeting = data + ", John Doe."}
    function updateFullGreetingWithPeriod(data){fullGreetingWithPeriod = data + ". John Doe."}

    const mwm = middleware({
         // Is the object that contains the list of action types.
        behaviors: {
            // This is an action type that will be added to middleware and other plugins will react to.
            greet: { 
                // Below is code that will trigger the "greet" action. 
                // This code takes an optional callback
                sayHello:function(data,cb = a=>a){
                    cb(data)
                }
            }
        }
    })

    mwm.use({
        //"outbound" does not exist on middleware "behavior" property. 
        // Therefore no listener will execute for this behavior.
        outbound(data,next){ 
            updateFullGreeting(data)
            next()
        }
    })

    // Here we pass a updateGreeting() as a callback with updated "greeting" greeting variable
    mwm.sayHello("Hello",updateGreeting)

    // "fullGreeting" is still undefined as the updateFullGreeting() 
    // was neither added as a callback or added to the middleware as a plugin
    expect(fullGreeting).toBe(undefined) 
    expect(greeting).toBe("Hello, John.")


    mwm.use({
         // Here we tell middleware that for the "greet" action
         // We want to execute our code within this greet()
        greet(data,next){
            // When a greet action is executed, we will update "fullGreeting"
            // with whatever is passed through the "data" property
            updateFullGreeting(data)
            // next() must be executed to ensure following plugins are executed 
            next()
        }
    })


    mwm.use({
        // Here we tell middleware that for the "greet" action
        // We want to execute our code within this greet()
       greet(data,next){
           // When a greet action is executed, we will update "fullGreetingWithPeriod"
           // with whatever is passed through the "data" property
           updateFullGreetingWithPeriod(data)
           // next() must be executed to ensure following plugins are executed 
           next()
       }
   })

    mwm.sayHello("Hello")
    expect(greeting).toBe("Hello, John.")

    // Now fullGreeting has been updated with the latest string with a comma
    expect(fullGreeting).toBe("Hello, John Doe.")
    // Now fullGreeting has been updated with the latest string with a period
    expect(fullGreetingWithPeriod).toBe("Hello. John Doe.")


})