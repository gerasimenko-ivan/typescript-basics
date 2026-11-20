export {};
/*
 * Number Limits
 *
 * Number Object provides several constants that show limits
 * of number type
 */

/*
 * The largest finite positive number that can be represented
 * in JavaScript.
 * Approximately 1.7976931348623157E+308.
 */
console.log(Number.MAX_VALUE);
/*
 * The smallest positive number greater than zero
 * that can be represented in JavaScript.
 * Approximately 4.9406564584124654E-324
 * (4.9406564584124654 × 10⁻³²⁴)
 */
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 1);     // false
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true

console.log(Number.MIN_SAFE_INTEGER === Number.MIN_SAFE_INTEGER - 1);     // false
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true