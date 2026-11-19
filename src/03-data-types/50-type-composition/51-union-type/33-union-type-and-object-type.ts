export {};
/*
 * Union Type and Object Type
 *
 * Multiple object types can be combined into a union type.
 */

type Robot = {
    name: string;
    processor: string;
}
type Vehicle = {
    engine: string;
    wheels: string;
}

/*
 * A type alias can combine multiple object types into a union type:
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