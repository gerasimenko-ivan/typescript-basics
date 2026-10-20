export {};
/*
 * Extending and Composing Interfaces
 *
 * There are two ways to reuse interface definitions:
 * - Extend an interface to inherit its properties and method signatures.
 * - Use an interface as the type of a property (composition).
 */

interface Engine {
    name: string;
    capacity: number;
}

interface SportsCarFeatures {
    hasFrontSplitter: boolean;
    hasSpoiler: boolean;
}

interface Car {
    name: string;
    engine: Engine; // Composition: Engine is a property type.
}

// Extension: SportsCar inherits Car and SportsCarFeatures.
interface SportsCar extends Car, SportsCarFeatures {}

const car: SportsCar = {
    name: 'Toyota Corolla Sport',
    engine: {
        name: '2ZR-FXE',
        capacity: 1.8,
    },
    hasFrontSplitter: false,
    hasSpoiler: true,
}

console.log(car);