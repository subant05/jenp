import {Maybe} from '../src/monad/index';

test("Testing: monad.Maybe", ()=>{
        const nothing = Maybe
            .fromNullable(2)
            .map(data=>data*2)
            .map(data=>data*2)
            .filter(data=>data >= 10)
            .getOrElse("Nothing")

        , just = Maybe
            .fromNullable(2)
            .map(data=>data*2)
            .map(data=>data*2)
            .filter(data=>data === 8)
            .getOrElse("Nothing")
            
        , nulled = Maybe
            .fromNullable(null)
            .map(data=>data*2)
            .map(data=>data*2)
            .filter(data=>data === 8)
            .getOrElse("Nulled")

        , undefinedValue = Maybe
            .fromNullable(undefined)
            .map(data=>data*2)
            .map(data=>data*2)
            .filter(data=>data === 8)
            .getOrElse("Undefined");

    expect(nothing).toBe("Nothing")
    expect(just).toBe(8)
    expect(nulled).toBe("Nulled")
    expect(undefinedValue).toBe("Undefined")

})