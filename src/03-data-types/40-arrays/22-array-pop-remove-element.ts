export {}
/*
 * Array - Remove Last Element
 *
 * pop() function removes the last element of the array, and
 * also returns the removed element.
 */

const cars: string[] = ['Toyota', 'Ford', 'Ferrari', 'Audi', 'Xiaomi'];
console.log('cars', cars);

// remove the last element
let lastElement = cars.pop();
console.log('lastElement', lastElement);
console.log('cars', cars);

lastElement = cars.pop();
console.log('lastElement', lastElement);
console.log('cars', cars);


/*
 * See also:
 * - src/03-data-types/20-undefined-and-null/50-undefined-when-array-empty.ts
 *    └── undefined returned by pop()
 */