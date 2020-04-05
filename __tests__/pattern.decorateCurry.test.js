
import {decorateCurry} from '../src/pattern/index';

test("Testing: pattern.decorateCurry()",()=>{
    class Dog {
        constructor(color="black & white", breed="Siberian Husky", type="Working"){
            this.color = color;
            this.breed = breed;
            this.type = type;
        }

        getDescription(){
            return `This ${this.color} dog is a ${this.breed} and it belongs to the ${this.type} group.`
        }
    }
    const decoratedDog = decorateCurry(Dog, {bark:()=>{return "Yap Yap"}})
    const littleDog = decoratedDog("tan","Chiuahua","Toy")
    expect(littleDog.bark()).toBe("Yap Yap")
    expect(littleDog.breed).toBe("Chiuahua")
    expect(littleDog.type).toBe("Toy")
    expect(littleDog.color).toBe("tan")
    expect(littleDog.getDescription()).toBe(`This tan dog is a Chiuahua and it belongs to the Toy group.`)

})