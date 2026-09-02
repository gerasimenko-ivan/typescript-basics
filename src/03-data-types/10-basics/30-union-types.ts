export {}
/*
 * Union types
 *
 * A union type allows a value to be one of several types
 * Symbol '|' is used to list different types for the variable
 */

let id: string | number;

// number value assigned
id = 123;
console.log(`id = '${id}', type of id = '${typeof id}'`);

// string value assigned
id = 'G13_45b';
console.log(`id = '${id}', type of id = '${typeof id}'`);

/*
 * A union type becomes especially useful when different kinds of
 * values are valid in the same context
 * (e.g. a function might accept either a string ID or a numeric ID).
 *
 * We will see more practical examples later with null,
 * classes and interfaces.
 */


// even 3 types and more possible
let variable: string | number | boolean = 'Hello World!';