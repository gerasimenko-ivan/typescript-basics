export {};
/*
 * Recursive Interfaces
 *
 * An interface can refer to itself as the type
 * of one of its properties.
 */

interface Person {
    name: string;
    age: number;

    /* The interface Person is used as a type
     * for the property of the interface Person */
    children?: Person[];
}

const person: Person = {
    name: 'John',
    age: 30,
    children: [
        {
            name: 'Alice',
            age: 5,
        },
        {
            name: 'Peter',
            age: 3,
        }
    ]
}

console.log(person);