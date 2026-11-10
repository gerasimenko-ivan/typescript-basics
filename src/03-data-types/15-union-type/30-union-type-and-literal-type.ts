export {};
/*
 * Union Type with Literal Types
 *
 * A union type can combine several literal types.
 *
 * A variable can only contain one of the explicitly
 * specified values.
 */

let answer: 'Yes' | 'No' | 'Maybe' = 'Yes';

console.log(answer);

answer = 'No';
console.log(answer);

answer = 'Maybe';
console.log(answer);

// answer = 'Definitely'; // Not allowed ❌
// answer = 'YES';        // Not allowed ❌

/*
 * Concept of 'Union Type + Literal Types' is useful
 * when a variable should accept only a predefined set of values
 */
let size: 'Small' | 'Medium' | 'Large' = 'Small';

console.log(size);