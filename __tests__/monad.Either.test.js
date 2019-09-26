import * as Monad from '../src/monad/index';

test("Testing: monad.Either", ()=>{
    const fromNullable = Monad
                            .Either
                            .fromNullable(100)

    , map = Monad
                .Either
                .fromNullable(100)
                .map(data=>data/2)
                .getOrElse("No Map")

    , value = Monad
                .Either
                .fromNullable(100)
                .map(data=>data/2)
                .value

    , setValue = Monad
                .Either
                .fromNullable(2)
    
    , right = Monad
                    .Either
                    .fromNullable(100)
                    .map((data)=>data*4)
                    .map(data=>data/2)
                    .filter(data=>data === 200)
                    .getOrElse("Nothing")
    , left = Monad
                .Either
                .fromNullable(100)
                .map((data)=>data*4)
                .map(data=>data/2)
                .filter(data=>data > 200)
                .getOrElse("Nothing")
    , undefinedValue = Monad
                    .Either
                    .fromNullable(undefined)
                    .map((data)=>data*4)
                    .map(data=>data/2)
                    .filter(data=>data > 200)
                    .getOrElse("Undefined")
    , nullValue = Monad
                    .Either
                    .fromNullable(null)
                    .map((data)=>data*4)
                    .map(data=>data/2)
                    .filter(data=>data > 200)
                    .getOrElse("Null")
    , chain = Monad
                .Either
                .fromNullable(5)
                .chain(function(data){
                    return new function(){
                        this.value = data
                        this.getValue = function(){return this.value}
                        return this;
                    }
                })
    , nullChain = Monad
                .Either
                .fromNullable(null)
                .chain(function(data){
                    return new function(){
                        this.value = data
                        this.getValue = function(){return this.value}
                        return this;
                    }
                });

    try {
        setValue.value = 20;
        setValue = setValue.value;
    } catch(e){

    }
    
    expect(setValue.value).toBe(2)
    expect(map).toBe(50)
    expect(value).toBe(50)
    expect(fromNullable.getOrElse("Other")).toBe(100)
    expect(right).toBe(200)
    expect(left).toBe("Nothing")
    expect(undefinedValue).toBe("Undefined")
    expect(nullValue).toBe("Null")
    expect(chain.getValue()).toBe(5)
    expect(nullChain.getOrElse("Null Chain")).toBe("Null Chain")

})