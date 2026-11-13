export {};
/*
 * Class as Type
 *
 * A class defines the structure and behaviour of its instances.
 * Its instance type can also be used to type ordinary objects.
 */

class Vehicle {
    name: string;
    wheelsCount: number;

    constructor(name: string, wheelsCount: number) {
        this.name = name;
        this.wheelsCount = wheelsCount;
    }

    move(): void {
        console.log(`${this.name} is moving on ${this.wheelsCount} wheels`);
    }
}

// An object that matches the Vehicle instance type.
// It doesn't need to be created with new Vehicle().
const car: Vehicle = {
    name: 'car',
    wheelsCount: 4,
    move(): void {
        console.log('Car is moving with its own move() implementation.');
    }
}

const bike = new Vehicle('bike', 2);

car.move();
bike.move();

console.log(car);
console.log(bike);

console.log(car instanceof Vehicle);  // false
console.log(bike instanceof Vehicle); // true

// Passing variable to a function expecting Vehicle
function startVehicle(vehicle: Vehicle): void {
    vehicle.move();
}

startVehicle(car);
startVehicle(bike);