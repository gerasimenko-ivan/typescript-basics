export {};
/*
 * Interface Optional Property
 *
 * An optional property is marked with '?'
 * Optional properties may be omitted from an object
 * Required properties must be provided when creating an object
 */

interface Person {
    name: string;
    age: number;
    isAlive?: boolean; // optional property
}

const person1: Person = {
    name: 'John',
    age: 30,
    isAlive: true,
}

const person2: Person = {
    name: 'Alice',
    age: 25,
    // Allowed ✅: no optional property
}

/* Not allowed ❌: required property is missing
 *   Error: Property age is missing in type { name: string; }
 *   but required in type Person */
// const person3: Person = {
//     name: 'Peter',
// }

console.log(person1);
console.log(person2);