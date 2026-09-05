export {}
/*
 * Arrays
 *
 * An array is an ordered collection of elements, usually of the same type.
 * These elements are stored in one variable.
 *
 * There are some specific tools to work with these elements:
 *  - access an element by index (index starts from 0)
 *  - add and remove elements
 *  - find, replace, sort, filter, etc.
 */

// cars       -- name of an array;
// : string[] -- type of array
// = [];      -- initialization of array with empty array
const cars: string[] = [];
console.log('cars', cars);


// TypeScript infers the type as string[] from the elements in the array (string values).
const cars2 = ['Toyota', 'Ford', 'Ferrari'];

console.log('cars2', cars2);       // whole array
console.log('cars2[0]', cars2[0]); // access 'Toyota' element by index
console.log('cars2[1]', cars2[1]); // access 'Ford' element by index
console.log('cars2[2]', cars2[2]); // access 'Ferrari' element by index