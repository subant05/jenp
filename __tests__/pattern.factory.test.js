import {factory} from '../src/pattern/index';
import TestRunner from 'jest-runner';
import { exportAllDeclaration } from '@babel/types';

test("Testing: factory()",()=>{
    class Cat {
        constructor(eyeColor,furColor){
            this.eyeColor = eyeColor
            this.furColor = furColor
        }

        getEyeColor(){
            return `Pretty ${this.eyeColor} eyes.`
        }

        getFurColor(){
            return `Pretty ${this.furColor} fur.`
        }
    }

    function Dog(type="toy",color="wite",sound="yap"){
        this.type =type;
        this.color =color;
        this.sound =sound;
    }
    Dog.prototype.bark = function(){return this.sound;}


    const myCat = factory(Cat,["yellow"])("black")
    const catClass = factory(Cat)
    const neighborCat = catClass("blue","white")
    const neighborsDog = factory(Dog,["large","black"])("Roof")

    expect(myCat.getEyeColor()).toBe('Pretty yellow eyes.')
    expect(myCat.getFurColor()).toBe('Pretty black fur.')
    expect(neighborCat.getEyeColor()).toBe('Pretty blue eyes.')
    expect(neighborCat.getFurColor()).toBe('Pretty white fur.')
    expect(neighborsDog.bark()).toBe('Roof')
})