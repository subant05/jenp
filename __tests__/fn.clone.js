import {clone} from '../src/fn/index';

test("Tesing: fn.clone()", ()=>{
    const originalObj = {
        name:"John Doe"
        , age: 37
    }

    const newObj = clone(originalObj)
    newObj.name = "Jane Doe"
    newObj.age = 29
    newObj.job = "Chairwoman"

    expect(originalObj.name).toBe("John Doe")
    expect(originalObj.age).toBe(37)
    expect(originalObj.job).toBe(undefined)
    expect(newObj.name).toBe("Jane Doe")
    expect(newObj.age).toBe(29)
    expect(newObj.job).toBe("Chairwoman")
})
