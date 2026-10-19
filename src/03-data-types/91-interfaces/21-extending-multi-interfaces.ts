export {};
/*
 * Extending Multi Interfaces
 *
 * An interface can extend multiple interfaces at once.
 * The resulting interface inherits their properties
 * and method signatures.
 */

interface Car {
    make: string;
    model: string;
}

interface ElectricCar {
    batteryName: string;
    batteryCapacity: number;
}

interface SportsCar {
    hasFrontSplitter: boolean;
    hasSpoiler: boolean;
}

interface ElectricSportsCar extends Car, ElectricCar, SportsCar {}

// An ElectricSportsCar must satisfy all three interfaces.
const car: ElectricSportsCar = {
    make: 'Toyota',
    model: 'Corolla',
    batteryName: 'LN2 AGM',
    batteryCapacity: 0.9,
    hasFrontSplitter: false,
    hasSpoiler: true,
}

console.log(car);