export {};
/*
 * Class-Interface Cooperation
 *
 * Class can implement an interface.
 * An interface describes the structure (contract) of an object,
 * while a class provides its implementation.
 */

interface Animal {
    name: string;
    makeNoise(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) { this.name = name; };

    makeNoise() {
        console.log(`Dog ${this.name} make noise: bow-wow!`);
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) { this.name = name; };

    makeNoise(): void {
        console.log(`Cat ${this.name} make noise: meow-meow!`);
    }
}

const dogMax = new Dog('Max');
const catLeo = new Cat('Leo');

/* letThemMakeNoise() accepts an argument of type Animal.
 *
 * TypeScript ensures that the argument has all properties
 * and methods required by the Animal interface.
 *
 * This allows us to safely call makeNoise(), access
 * Animal properties on both Dog and Cat instances. */
function letThemMakeNoise(animal: Animal): void {
    animal.makeNoise();       // ✅ Allowed
    console.log(animal.name); // ✅ Allowed
}

letThemMakeNoise(dogMax);
letThemMakeNoise(catLeo);