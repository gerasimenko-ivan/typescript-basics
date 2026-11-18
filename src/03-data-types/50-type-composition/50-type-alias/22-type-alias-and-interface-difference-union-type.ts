export {};
/*
 * Type Aliases for Union Types
 *
 * Type aliases can be used to define union types.
 *
 * Interfaces cannot directly represent union types.
 */

type SuperString = string | null | undefined;

const message: SuperString = 'Hello';
const emptyMessage: SuperString = null;

console.log(`${message} / ${emptyMessage}`);

/*
 * Interfaces cannot be used to define a union of types:
 */
// interface MegaString string | null;   // ❌ not allowed
// interface MegaString = string | null; // ❌ not allowed

interface Robot {
    name: string;
    processor: string;
}
interface Vehicle {
    engine: string;
    wheels: string;
}

/*
 * A type alias can combine multiple interfaces into a union type:
 */
type Transformer = Robot | Vehicle;

const optimus: Transformer = {
    name: 'Optimus Prime',
    processor: 'Cybertronian',
};

const truck: Transformer = {
    engine: 'Diesel',
    wheels: '18',
};

console.log(optimus);
console.log(truck);

/*
 * Interfaces cannot be used to define a union of types:
 */
// interface TransformerNew = Robot | Vehicle; // ❌ not allowed