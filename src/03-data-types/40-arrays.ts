/*
 * TODO: Arrays
 *
 * It is a sequence of values (of the same type?) stored in one item.
 * There are some specific tools to work with these values:
 *  - get by index (index starts from 0)
 *  - add, remove value
 */

// cars       -- name of an array;
// : string[] -- type of array elements
// = [];      -- initialization of array with empty array
const cars: string[] = [];
console.log("cars", cars);


// : string[] -- type of array elements, it is not stated, but it is inferred from values
const cars2 = ["Toyota", "Ford", "Ferrari"];
console.log("cars2", cars2);