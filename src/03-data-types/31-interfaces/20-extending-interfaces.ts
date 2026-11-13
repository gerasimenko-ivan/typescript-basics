export {};
/*
 * Extending Interfaces
 *
 * Interfaces can extend another interface.
 * The extending interface inherits its properties
 * and method signatures.
 */

interface Vehicle {
    name: string;
    move(): void;
}

interface Car extends Vehicle {
    wheels: string;
}

interface Airplane extends Vehicle {
    wings: string;
    wheels: string;
    land(): void;
}

const car: Car = {
    name: 'Ford',
    wheels: '4 wheels',
    move(): void {
        console.log(`Car '${this.name}' is driving on ${this.wheels}`);
    }
}

const airplane: Airplane = {
    name: 'Boing',
    wings: '2 big wings',
    wheels: '10 wheels',
    move(): void {
        console.log(`Airplane '${this.name}' is flying on ${this.wings}.`);
    },
    land(): void {
        console.log(`Airplane '${this.name}' is landing on ${this.wheels}.`);
    }
}

console.log(car);
car.move();

console.log(airplane);
airplane.move();
airplane.land();