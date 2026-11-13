export {};
/*
 * Access Modifiers Comparison
 *
 * public: accessible from outside the class.
 * protected: accessible within the class and its subclasses.
 * private: accessible only within the declaring class.
 */

class Animal {
    public name: string;
    protected age: number;
    private weight: number;

    constructor(name: string) {
        this.name = name;
        this.age = 0;
        this.weight = 0;
    }

    public eat(kcal: number): void {
        console.log(`${this.name} is eating ${kcal} kcal.`);
    }

    private addWeight(grams: number): void {
        this.weight += grams;
        console.log(`  Weight: ${this.weight} g.`);
    }

    protected grow(ageIncrement: number, weightIncrement: number): void {
        this.age += ageIncrement;
        console.log(`${this.name} is growing.\n  Age: ${this.age}`);
        this.addWeight(weightIncrement);
    }
}

class Dog extends Animal {
    public eatAsDog(): void {
        super.eat(333);
    }

    public growAsDog(): void {
        // Allowed ✅: access protected methods of parent class Animal
        super.grow(1, 500);

        /* Not allowed ❌
         * Method addWeight is private and
         * only accessible within class Animal */
        // super.addWeight(500);
    }
}

const dog = new Dog('Bim');
const animal = new Animal('Noname');

// Allowed ✅: access public methods outside the class
dog.eatAsDog();
dog.growAsDog();
dog.growAsDog();
dog.growAsDog();

// Allowed ✅: access public property outside the class
console.log(dog.name);

/* Not allowed ❌
 * Access to private properties and methods is not
 * allowed outside the class. */
// console.log(dog.weight);
// animal.addWeight(100);

/* Not allowed ❌
 * Access to protected properties and methods is only
 * allowed within the class and its subclasses. */
// console.log(dog.age);
// animal.grow(1, 100);