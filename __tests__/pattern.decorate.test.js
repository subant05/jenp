import * as Pattern from '../src/pattern/index';

test("Testing: pattern.decorate()",()=>{
    class Dog {
        constructor(color="black & white", breed="Siberian Husky", type="Working"){
            this.color = color;
            this.breed = breed;
            this.type = type;
        }
    }
    const littleDog = Pattern.decorate(Dog, ["tan","Chiuahua","Toy"], {bark:()=>{return "Yap Yap"}})
    expect(littleDog.bark()).toBe("Yap Yap")
})