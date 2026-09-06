export {}
/*
 * Array - Add, Remove Elements
 *
 * push(), pop() functions
 */

const cars: string[] = []; // declare and initialize an empty string array
console.log('cars', cars);

// add one element
// push() functions adds element(s) to the end of the array
cars.push('Toyota');
console.log('cars', cars);

// add one element
cars.push('Ford');
console.log('cars', cars);

// add multiple elements - it's possible to add multiple elements
cars.push('Ferrari', 'Audi', 'Xiaomi');
console.log('cars', cars);


// remove the last element
// pop() function also returns the removed element
let lastElement = cars.pop();
console.log('lastElement', lastElement);
console.log('cars', cars);


/*
 * See also:
 * - src/03-data-types/20-undefined-and-null/50-undefined-in-arrays.ts
 *    └── undefined returned by pop()
 */