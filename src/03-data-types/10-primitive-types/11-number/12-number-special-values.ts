export {};
/*
 * Special Number Values
 *
 * Some values represent special mathematical concepts, such as infinity,
 * or result from invalid arithmetic operations or numeric conversions.
 */

const positiveInfinity: number = Infinity;
const negativeInfinity: number = -Infinity;
const notANumber: number = NaN;

console.log(positiveInfinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(notANumber); // NaN

console.log(typeof positiveInfinity); // number
console.log(typeof notANumber); // number


// Examples:
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(Infinity + 100); // Infinity

console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN
console.log(Number('Hello')); // NaN
// NaN === NaN:
console.log((0 / 0) === (0 / 0)); // false