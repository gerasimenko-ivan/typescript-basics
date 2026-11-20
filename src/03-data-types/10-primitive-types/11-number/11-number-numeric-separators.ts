export {};
/*
 * Numeric Separators
 *
 * Underscores can be used to improve readability of numeric literals.
 * They have no effect on the actual value.
 */

// Underscores can improve readability when used as separators:
const number1: number = 1_000_000;
/*
 * Underscores can also be placed between individual digits
 * It is legal, however, it does not improve readability:
 */
const number2: number = 1_0_0_0_0_0_0;
const number3: number = 123_456.789;
const number4: number = 0xFF_FF;
const number5: number = 0b1010_0001;

console.log(number1); // 1000000
console.log(number2); // 1000000
console.log(number3); // 123456.789
console.log(number4); // 65535
console.log(number5); // 161