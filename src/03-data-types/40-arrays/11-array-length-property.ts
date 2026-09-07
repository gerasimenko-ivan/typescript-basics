export {}
/*
 * Array - Length Property
 *
 * .length - returns current length of an array (number of elements in an array)
 */

const cars = ['Toyota', 'Ford', 'Ferrari', 'Audi'];

console.log(`cars.length = ${cars.length}`); // length 4

// if we remove one element, the length decreases
cars.pop(); // remove one element
console.log(cars);
console.log(`cars.length = ${cars.length}`); // length 3


/*
 * .pop() - method
 * See also:
 * - src/03-data-types/40-arrays/22-array-pop-remove-element.ts
 */