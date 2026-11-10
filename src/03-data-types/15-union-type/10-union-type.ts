export {};
/*
 * Union types
 *
 * A union type allows a value to be one of several types
 * Symbol '|' (vertical line or vertical bar) is used to list
 * different types for the variable
 */

let id: string | number;

// number value assigned
id = 123456;
console.log(`id = '${id}', type of id = '${typeof id}'`);

// string value assigned
id = 'G13_45b';
console.log(`id = '${id}', type of id = '${typeof id}'`);

// Only string or number types are valid for id variable
// id = true; // ❌ not allowed (boolean type)