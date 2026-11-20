export {};
/*
 * Floating-Point Precision
 *
 * Floating-point numbers cannot represent all decimal fractions exactly.
 * As a result, arithmetic operations may produce slightly unexpected values.
 *
 * This is why direct equality comparisons can be unreliable
 * when working with floating-point numbers.
 */

const result1: number = 0.1 + 0.2;

console.log(result1); // 0.30000000000000004
console.log(result1 === 0.3); // false
console.log(result1 > 0.299999999 && result1 < 0.300000001); // true


const result2: number = 0.1 * 0.2;

console.log(result2); // 0.020000000000000004
console.log(result2 === 0.02); // false
console.log(result2 > 0.01999999999 && result2 < 0.0200000001); // true