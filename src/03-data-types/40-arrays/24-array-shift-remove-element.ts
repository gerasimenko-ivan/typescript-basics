export {}
/*
 * Array - Remove the first element
 *
 * shift() function removes the first element of the array, and
 * also returns the removed element.
 */

const cars = ['Toyota', 'Ford', 'Ferrari'];
console.log(cars); // output: [ 'Toyota', 'Ford', 'Ferrari' ]

// remove the first element
let firstElement = cars.shift();

console.log('firstElement', firstElement);
console.log(cars); // output: [ 'Ford', 'Ferrari' ]