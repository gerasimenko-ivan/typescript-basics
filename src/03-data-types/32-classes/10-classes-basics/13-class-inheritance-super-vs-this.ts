export {};
/*
 * This and Super comparison
 *
 * this: refers to the current class
 * super: refers to the parent class
 */

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeNoise(noise: string): void {
        console.log(`Animal ${this.name} is making noise ${noise}`);
    }
}

class Dog extends Animal {
    // Override the parent class's makeNoise() method
    makeNoise(noise: string): void {
        console.log(`Dog ${this.name} is making noise ${noise}`);
    }

    makeNoiseAsAnimal(): void {
        // Call the parent class's implementation of makeNoise()
        super.makeNoise('Owwwww-owwwww (as Animal)');
    }

    makeNoiseAsDog(): void {
        // Call the current class's implementation of makeNoise()
        this.makeNoise('Woof-woof (as Dog)');
    }
}

const dog = new Dog('Bim');

dog.makeNoise('Aaaaaa!');
dog.makeNoiseAsAnimal();
dog.makeNoiseAsDog();