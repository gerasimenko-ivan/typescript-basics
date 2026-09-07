export {}
/*
 * Array - Add Element(s)
 *
 * unshift() function adds element(s) to the beginning of the array
 */

const cars: string[] = []; // declare and initialize an empty string array
console.log('cars', cars); // output: cars []

// add one element
cars.unshift('Toyota');
console.log('cars', cars); // output: cars [ 'Toyota' ]

// add one element
cars.unshift('Ford');
console.log('cars', cars); // output: cars [ 'Ford', 'Toyota' ]

// add multiple elements - it's possible to add multiple elements
cars.unshift('Ferrari', 'Audi', 'Xiaomi');

console.log('cars', cars);
// output: cars [ 'Ferrari', 'Audi', 'Xiaomi', 'Ford', 'Toyota' ]