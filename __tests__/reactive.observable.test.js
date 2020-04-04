import  * as Rx from '../src/reactive/index';

test("Testing: reactive.observable: document.body click event", ()=>{
    const body = document.body
    const subscription = Rx.observable((observer)=>{
        observer.next({isWorking: true})
    }, {node:body, event:"click"})

    subscription.pipe(data=>{
        data["pipeOne"] = 'executed' 
        return data
    }
    , data=>{
        data["pipeTwo"] = 'executed' 
        return data
    }).subscribe(data=>{
        expect(data.isWorking).toBe(true)
        expect(data.pipeOne).toBe("executed")
        expect(data.pipeTwo).toBe("executed")
    })

    const evt =  new Event('click')
    body.dispatchEvent(evt)
})

test("Testing: reactive.observable", ()=>{
    const subscription = Rx.observable((observer)=>{
        observer.next({isWorking: true})
    })

    subscription.pipe(data=>{
        data["pipeOne"] = 'executed' 
        return data
    }
    , data=>{
        data["pipeTwo"] = 'executed' 
        return data
    }).subscribe(data=>{
        expect(data.isWorking).toBe(true)
        expect(data.pipeOne).toBe("executed")
        expect(data.pipeTwo).toBe("executed")
    })

    subscription.emit({})
})
