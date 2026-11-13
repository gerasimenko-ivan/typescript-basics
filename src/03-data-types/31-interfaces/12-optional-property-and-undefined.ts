export {};
/*
 * Optional Property and Undefined
 *
 * An optional property can be omitted from an object.
 * By default, it can also be explicitly assigned `undefined`,
 * even if its declared type does not include `undefined`.
 *   Note: The behaviour of optional properties depends on
 *   the `exactOptionalPropertyTypes` compiler option.
 *
 * A required property can have the value `undefined`
 * only if its type explicitly includes `undefined`.
 *
 * A property whose value is `undefined` still exists in object.
 */

interface Person1 {
    name: string;
    age?: number;
}

const personAlice1: Person1 = { name: 'Alice 1' };

/* Although type of age property is declared as number explicitly
 * it also can hold undefined value because it is an optional property */
const personAlice2: Person1 = { name: 'Alice 2', age: undefined };

console.log(personAlice1); // no property 'age'
console.log(personAlice2); // there is a property 'age', it is undefined


interface Person2 {
    name: string;
    age: number | undefined;
}

/* Not allowed ❌:
 *   Error: Type undefined is not assignable to type string */
// const person2: Person2 = { name: undefined, age: 20 };

const person2: Person2 = { name: 'John', age: undefined };

console.log(person2); // there is a property 'age', it is undefined