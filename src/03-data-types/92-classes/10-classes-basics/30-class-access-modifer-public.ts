export {};
/*
 * Access Modifier Public
 *
 * Properties and methods are public by default.
 * They can be accessed both inside and outside the class.
 */

class Car {
    make: string = '';         // implicitly public property
    public model: string = ''; // explicitly public property

    // implicitly public method
    intro(): void {
        // Access the properties from within the class using 'this'
        console.log(`The car is a(an) ${this.make} ${this.model}.`);
    }
}

const car = new Car();

// Access (write and read) the properties outside the class
car.make = 'Ford';
car.model = 'Focus';
console.log(car.make);
console.log(car.model);

// Access the method outside the class
car.intro();