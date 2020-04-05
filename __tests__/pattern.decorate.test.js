import {decorate} from '../src/pattern/index';

test("Testing: pattern.decorate()",()=>{
    class Dog {
        constructor(color="black & white", breed="Siberian Husky", type="Working"){
            this.color = color;
            this.breed = breed;
            this.type = type;
        }
        whoBarked(){
            return `${this.bark()} went the dog`
        }
    }
    const littleDog = decorate(Dog, ["tan","Chiuahua","Toy"], {bark:()=>{return "Yap Yap"}})
    expect(littleDog.bark()).toBe("Yap Yap")
    expect(littleDog.whoBarked()).toBe("Yap Yap went the dog")

})