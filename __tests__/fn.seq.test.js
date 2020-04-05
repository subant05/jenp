import {seq} from '../src/fn/index';

test("Tesing: fn.seq()", ()=>{
    const dataChange = {}
    const sequentialTestFn = seq(
        (data)=>{dataChange.A = "A"}
        , (data)=>{dataChange.B = "B"}
        , (data)=>{dataChange.C = "C"}
        ,  (data)=>{dataChange.data = data}
    )
    
    dataChange.directAssignmentData = sequentialTestFn("Hello")

    expect(dataChange.A).toBe("A")
    expect(dataChange.B).toBe("B")
    expect(dataChange.C).toBe("C")
    expect(dataChange.data).toBe("Hello")
    expect(dataChange.directAssignmentData).toBe("Hello")
})
