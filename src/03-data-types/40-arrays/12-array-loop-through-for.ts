export {}
/*
 * Array - Loop Through Elements
 */

const cars = ['Toyota', 'Ford', 'Ferrari', 'Audi'];

// Loop through array elements using for...of:
for (const car of cars) {
    // for...of directly gives you each element of the array
    // the element is stored in car variable here
    console.log(car);
}


// Loop through array using access to elements by index:
// let i = 0; - index in arrays start from 0
// cars.length - used to identify when to exit the loop
for (let i = 0; i < cars.length; i++) {
    console.log(`index = ${i} => '${cars[i]}'`);
}