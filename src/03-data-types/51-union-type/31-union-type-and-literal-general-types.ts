export {};
/*
 * Union Type with Literal and General Types
 *
 * A union type can combine literal types and general types.
 *
 * The general type boolean allows both true and false,
 * while the string literal types allow only specific strings.
 */

let answer: 'Yes' | 'No' | 'Maybe' | boolean = 'Yes';

console.log(answer);

answer = 'No';
console.log(answer);
answer = 'Maybe';
console.log(answer);
answer = true;
console.log(answer);
answer = false;
console.log(answer);

// answer = 'Definitely'; // Not allowed ❌
// answer = 'YES';        // Not allowed ❌