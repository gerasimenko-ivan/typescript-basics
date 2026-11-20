export {};
/*
 * Number Formats
 *
 * TypeScript supports decimal, floating-point, binary, octal,
 * and hexadecimal numeric literals.
 * Non-decimal numeric literals are displayed in decimal notation
 * by default when printed.
 */

const number1: number = 12345; // decimal
const number2: number = 1.234; // floating point
const number3: number = 0b101; // binary
const number4: number = 0o101; // octal
const number5: number = 0xA11; // hexadecimal

console.log(`DEC:   ${number1}`); // Output: 12345
console.log(`FLOAT: ${number2}`); // Output: 1.234
console.log(`BIN:   ${number3}`); // Output: 5
console.log(`OCT:   ${number4}`); // Output: 65
console.log(`HEX:   ${number5}`); // Output: 2577