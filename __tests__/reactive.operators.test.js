import  * as Rx from '../src/reactive/index';

test("Testing: reactive.map", ()=>{
    const subscription = Rx.observable((observer)=>{
        observer.next([1,2,3])
    })

    subscription.pipe(Rx.map((item)=>item*10)).subscribe(data=>{
        expect(data[0]).toBe(10)
        expect(data[1]).toBe(20)
        expect(data[2]).toBe(30)
    })

    subscription.emit()
})

test("Testing: reactive.filter", ()=>{
    const subscription = Rx.observable((observer)=>{
        observer.next([1,2,3])
    })

    subscription.pipe(Rx.filter((item)=>item>2)).subscribe(data=>{
        expect(data[0]).toBe(3)
        expect(data.length).toBe(1)
    })

    subscription.emit()
})

test("Testing: reactive.find", ()=>{
    const subscription = Rx.observable((observer)=>{
        observer.next([1,2,3])
    })

    subscription.pipe(Rx.find((item)=>item*2 === 4)).subscribe(data=>{
        expect(data).toBe(2)
    })

    subscription.emit()
})

test("Testing: reactive.operator", ()=>{
    const subscription = Rx.observable((observer)=>{
        observer.next([1,2,3])
    })

    subscription.pipe(data=>{
        return data.reverse()
    }).subscribe(data=>{
        expect(data[0]).toBe(3)
        expect(data[1]).toBe(2)
        expect(data[2]).toBe(1)
    })

    subscription.emit()
})


test("Testing: reactive.pipe", ()=>{
    const subscription = Rx.observable((observer)=>{
        observer.next([1,2,3])
    })

    subscription.pipe(
        Rx.map(item=>item*10),
        Rx.filter(item=>item===30)
    )
    .subscribe(data=>{
        expect(data[0]).toBe(30)
    })

    subscription.emit()
})