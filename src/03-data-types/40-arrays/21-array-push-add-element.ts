export {}
/*
 * Array - Add Element(s)
 *
 * push() function adds element(s) to the end of the array
 */

const cars: string[] = []; // declare and initialize an empty string array
console.log('cars', cars); // output: cars []

// add one element
cars.push('Toyota');
console.log('cars', cars); // output: cars [ 'Toyota' ]

// add one element
cars.push('Ford');
console.log('cars', cars); // output: cars [ 'Toyota', 'Ford' ]

// add multiple elements - it's possible to add multiple elements
cars.push('Ferrari', 'Audi', 'Xiaomi');

console.log('cars', cars);
// output: cars [ 'Toyota', 'Ford', 'Ferrari', 'Audi', 'Xiaomi' ]