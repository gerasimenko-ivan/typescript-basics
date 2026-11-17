export {};
/*
 * Readonly Properties
 *
 * A readonly property cannot be reassigned after
 * the object has been created.
 */

interface Person {
    name: string;
    readonly id: string;
}

const person: Person = {
    name: 'James',
    id: 'J-12345',
}

person.name = 'John'; // Allowed ✅: name is not readonly.

/* Not allowed ❌
 *   Error: Cannot assign to id because it is a read-only property */
// person.id = '54321-S';

console.log(person);