import {tap} from '../src/fn/index';

test("Testing: fn.tap()",()=>{
    let report;

    function reporting(){
        report = arguments[0]
    }

    const assignedReportingService = tap(reporting)
    const unassignedReportingService = tap();

    expect(unassignedReportingService("A")).toBe("A")
    expect(assignedReportingService("B")).toBe("B")
    expect(report).toBe("B")
    assignedReportingService("C")
    expect(report).toBe("C")

})