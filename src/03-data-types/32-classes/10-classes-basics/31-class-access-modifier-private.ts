export {};
/*
 * Access Modifier Private
 *
 * Private properties and methods can only be accessed
 * within the class.
 */

class Car {
    private make: string = '';
    private model: string = '';

    setMakeModel(make: string, model: string): void {
        this.make = make;
        this.model = model;
    }

    public intro(): void {
        // Access private method from within the class using 'this'
        console.log(`The car is a(an) ${this.getMakeModel()}.`);
    }

    private getMakeModel(): string {
        // Access private properties from within the class using 'this'
        return `${this.make} ${this.model}`;
    }
}

const car = new Car();

/* Not allowed ❌ - direct access to a private property (write)
 *   Error: Property 'make' is private and only accessible within class Car */
// car.make = 'Ford';

/* Not allowed ❌ - direct access to a private property (read)
 *   Error: Property 'model' is private and only accessible within class Car */
// console.log(car.model);

// Access the private properties indirectly through a public method
car.setMakeModel('Ford', 'Focus'); // ✅ allowed

/* Not allowed ❌ - direct access to a private method
 *   Error: Method getMakeModel() is private and only accessible within class Car */
// console.log(car.getMakeModel());

// Access the public method outside the class
car.intro(); // ✅ allowed