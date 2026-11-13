export {};
/*
 * Access Modifier Protected
 *
 * Protected properties and methods can only be accessed
 * within the declaring class and its subclasses.
 */

class Animal {
    protected name: string;

    constructor(name: string) { this.name = name; }

    protected eat(): void {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    public eatAsDog(): void {
        this.eat();
    }

    public bark(): void {
        console.log(`${this.name} is barking`);
    }
}

const dog = new Dog('Bim');

// Allowed ✅: access public methods outside the class
dog.eatAsDog();
dog.bark();

/* Not allowed ❌
 * Property 'name' is protected and only accessible
 * within class Animal and its subclasses. */
// console.log(dog.name);

/* Not allowed ❌
 *   Error: method eat() is protected and only accessible
 *   within class Animal and its subclasses. */
// dog.eat();