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

interface ElectricCarFeatures {
    batteryName: string;
    batteryCapacityKwh: number;
}

interface SportsCarFeatures {
    hasFrontSplitter: boolean;
    hasSpoiler: boolean;
}

interface ElectricSportsCar extends Car, ElectricCarFeatures, SportsCarFeatures {}

// An ElectricSportsCar must satisfy all three interfaces.
const car: ElectricSportsCar = {
    make: 'Toyota',
    model: 'Corolla',
    batteryName: 'LN2 AGM',
    batteryCapacityKwh: 0.9,
    hasFrontSplitter: false,
    hasSpoiler: true,
}

console.log(car);