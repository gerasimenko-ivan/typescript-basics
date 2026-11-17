export {};
/*
 * Class VS Interface
 *
 * Class:
 *  - describes the structure of an object
 *      PLUS: access modifiers (visibility of properties, methods)
 *      PLUS: assignment of properties
 *  - defines method signatures
 *      PLUS: implementation of methods
 *  - can create instances using the new keyword
 *
 * Interface:
 *  - describes the structure of an object
 *  - defines method signatures
 */

class Vehicle {
    // Property declaration and initialization
    //   Also: access modifier (public)
    public name: string = '';
    public wheelsNumber: number = 0;

    // Method implementation
    public move(): void {
        console.log(`Vehicle ${this.name} is moving on ${this.wheelsNumber} wheels (class).`);
    }
}

interface VehicleContract {
    // Property declarations
    //   NO: access modifiers
    //   NO: initial values
    name: string;
    wheelsNumber: number;

    // Method signature (no implementation)
    move(): void;
}

// An actual instance created from the Vehicle class
const vehicleByClass = new Vehicle();
vehicleByClass.name = 'VehicleByClass';
vehicleByClass.wheelsNumber = 4;

// An object literal that satisfies the VehicleContract interface
const vehicleByInterface: VehicleContract = {
    name: 'VehicleByInterface',
    wheelsNumber: 10,
    move(): void {
        console.log(`Vehicle ${this.name} is moving on ${this.wheelsNumber} (interface).`);
    }
};

// function is declared to accept one parameter of type Vehicle
function moveVehicle(vehicle: Vehicle): void {
    vehicle.move();
}

moveVehicle(vehicleByClass);
moveVehicle(vehicleByInterface);

/*
 * Although moveVehicle() accepts a parameter of type Vehicle,
 * it also accepts vehicleByInterface.
 *
 * Why?
 * Both objects have the same required public properties and method.
 * TypeScript uses structural typing to check compatibility.
 */