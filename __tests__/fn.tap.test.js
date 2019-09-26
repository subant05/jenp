import * as Functional from '../src/fn/index';

test("Testing: fn.tap()",()=>{
    let report;

    function reporting(){
        report = arguments[0]
    }

    const assignedReportingService = Functional.tap(reporting)
    const unassignedReportingService = Functional.tap();

    expect(unassignedReportingService("A")).toBe("A")
    expect(assignedReportingService("B")).toBe("B")
    expect(report).toBe("B")
    assignedReportingService("C")
    expect(report).toBe("C")

})