/*
 * Class - Inheritance
 *
 * One class can extend another class using 'extends' keyword.
 * Class inheritance is a feature of classes.
 */

class Animal {
    name: string;
    constructor(name: string) { this.name = name; }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    // Dog inherits the 'name' property and 'eat()' method from Animal

    bark() {
        console.log(`${this.name} is barking`);
    }
}
class Cat extends Animal {
    // Cat inherits the 'name' property and 'eat()' method from Animal

    meow() {
        console.log(`${this.name} is meowing`);
    }
}

const dog = new Dog('Doggy');
const cat = new Cat('Catty');

// Both instances inherit the 'eat()' method from Animal:
dog.eat();
cat.eat();

dog.bark(); // only Dog has the 'bark()' method
cat.meow(); // only Cat has the 'meow()' method

// dog.meow(); // ❌ Dog does not have the 'meow()' method
// cat.bark(); // ❌ Cat does not have the 'bark()' method