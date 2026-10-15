export {};
/*
 * Interfaces
 *
 * Interface describes the structure of an object:
 *  - properties and their types
 *  - optional properties (marked with ?)
 *  - readonly properties
 *  - method signatures
 */

interface Person {
    name: string;
    age: number;
    isAlive: boolean;
}

const person: Person = {
    name: 'John',
    age: 30,
    isAlive: true,
}

console.log(person);