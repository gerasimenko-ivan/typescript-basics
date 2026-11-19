export {};
/*
 * Union Type and Interface
 *
 * Multiple interfaces can be combined into a union type.
 * A union type must be declared using a type alias, not an interface.
 */

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
 * Interfaces cannot directly define union types:
 */
// interface TransformerNew = Robot | Vehicle; // ❌ not allowed

/*
 * However, interface properties can have union types:
 */
interface TransformerNew {
    robovehicle: Robot | Vehicle;
}