export {};
/*
 * Class-Interface Cooperation
 *
 * An improvement to the previous example.
 *
 * letThemMakeNoise() only needs the makeNoise() method,
 * so we can introduce a dedicated, smaller interface.
 *
 * Animal extends AnimalNoise, inheriting its contract.
 */

interface AnimalNoise {
    makeNoise(): void;
}

interface Animal extends AnimalNoise {
    name: string;
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

/* letThemMakeNoise() accepts an argument of type AnimalNoise.
 *
 * Therefore, the argument only needs to satisfy the
 * makeNoise() contract. Other properties are not required. */
function letThemMakeNoise(animal: AnimalNoise): void {
    animal.makeNoise();          // ✅ Allowed
    // console.log(animal.name); // ❌ Not allowed
}

letThemMakeNoise(dogMax);
letThemMakeNoise(catLeo);

/*
 * This example illustrates the idea behind
 * the Interface Segregation Principle, one of the SOLID principles.
 *   "Clients should not be forced to depend on interfaces they do not use"
 */