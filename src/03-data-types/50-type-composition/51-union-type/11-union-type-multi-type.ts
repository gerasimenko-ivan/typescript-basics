export {};
/*
 * Number of Types
 *
 * A union can contain two, three or more types.
 * A value can be assigned if it matches at least one of them.
 */

// 3 types
const variable1: string | number | boolean = 'Hello World!';

console.log(variable1);

// 4 types
const variable2: string | number | boolean | null = 180;

console.log(variable2);

// 5 types
let variable3: string | number | boolean | null | undefined;

console.log(variable3);

// Different values assigned to the same variable
variable3 = 'Hello World!';
console.log(variable3);

variable3 = 100;
console.log(variable3);

variable3 = true;
console.log(variable3);

variable3 = null;
console.log(variable3);

variable3 = undefined;
console.log(variable3);