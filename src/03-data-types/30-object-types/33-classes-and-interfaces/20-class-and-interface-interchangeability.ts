export {};
/*
 * Class and Interface interchangeability
 */

class Vehicle {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`(Class) move vehicle: ${this.name}`);
    }
}

interface VehicleContract {
    name: string;
    move(): void;
}

const vehicleByClass = new Vehicle('Ford');

const vehicleByInterface: VehicleContract = {
    name: 'Toyota',
    move(): void {
        console.log(`(Interface) move vehicle: ${this.name}`);
    }
}

/*
 * Both assignments are valid because
 * their public structures match
 */
const vehicle1: VehicleContract = vehicleByClass;
const vehicle2: Vehicle = vehicleByInterface;

console.log(vehicleByClass); // Vehicle { name: 'Ford' }
console.log(vehicle1);       // Vehicle { name: 'Ford' }

// The declared types do not change the actual object identity
console.log(vehicleByClass instanceof Vehicle); // true
console.log(vehicle1 instanceof Vehicle);       // true

console.log(vehicleByInterface); // { name: 'Toyota', move: [Function: move] }
console.log(vehicle2);           // { name: 'Toyota', move: [Function: move] }

console.log(vehicleByInterface instanceof Vehicle); // false
/*
 * Even though vehicle2 is declared as type Vehicle,
 * it is not an actual instance of the Vehicle class
 */
console.log(vehicle2 instanceof Vehicle);           // false

// The original object's method implementation is executed
vehicleByClass.move();
vehicle1.move();

vehicleByInterface.move();
vehicle2.move();