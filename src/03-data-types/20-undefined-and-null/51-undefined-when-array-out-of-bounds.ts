export {}
/*
 * 'undefined' is returned when we are trying to access an element
 * that does not exist
 */

const cars = ['Toyota', 'Ford', 'Ferrari', 'Audi'];


// There are 4 elements in this array.
// Array indexes start from 0, so index 3 is the 4th element.
console.log(`cars[3] => '${cars[3]}'`); // output: cars[3] => 'Audi'


// There is no element at index 4.
// Therefore, 'undefined' is returned.
console.log(`cars[4] => '${cars[4]}'`); // output: cars[4] => 'undefined'