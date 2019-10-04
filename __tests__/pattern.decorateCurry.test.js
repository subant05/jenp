
import * as Pattern from '../src/pattern/index';

test("Testing: pattern.decorateCurry()",()=>{
    class Dog {
        constructor(color="black & white", breed="Siberian Husky", type="Working"){
            this.color = color;
            this.breed = breed;
            this.type = type;
        }
    }
    const decoratedDog = Pattern.decorateCurry(Dog, {bark:()=>{return "Yap Yap"}})
    const littleDog = decoratedDog("tan","Chiuahua","Toy")
    expect(littleDog.bark()).toBe("Yap Yap")
})