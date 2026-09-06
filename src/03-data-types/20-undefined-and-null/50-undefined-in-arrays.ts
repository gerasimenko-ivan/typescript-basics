export {}
/*
 * Undefined and Array
 *
 * The pop() function removes and returns the last element.
 * If pop() is called on an empty array, it returns undefined.
 */

const cars = ['Toyota', 'Ford'];

/* type of lastElement is 'string | undefined'
   because if pop() is called on an empty array, it will return undefined */
let lastElement = cars.pop();
console.log('lastElement', lastElement); // lastElement Ford

/* line below will cause an error:
   "Type string | undefined is not assignable to type string" */
// let lastElementOnlyString: string = cars.pop(); // ❌ not allowed


lastElement = cars.pop();
console.log('lastElement', lastElement); // lastElement 'Toyota'

lastElement = cars.pop();
console.log('lastElement', lastElement); // lastElement 'undefined'


/*
 * See also:
 * - src/03-data-types/40-arrays/21-array-add-remove-element.ts
 *    └──  Array.prototype.pop()
 */