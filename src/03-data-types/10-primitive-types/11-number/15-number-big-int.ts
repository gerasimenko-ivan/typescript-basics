export {};
/*
 * BigInt
 *
 * BigInt is used to represent integers that are larger than
 * the safe integer range supported by the number type.
 */

const bigNumber1: bigint = 9_007_199_254_740_993n;
const bigNumber2: bigint = BigInt('9007199254740993');

console.log(bigNumber1); // 9007199254740993n
console.log(bigNumber2); // 9007199254740993n
console.log(typeof bigNumber1); // bigint