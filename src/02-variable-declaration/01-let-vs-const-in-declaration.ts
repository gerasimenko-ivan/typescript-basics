/**
 * Declaration:
 *
 *  - let and const -- go first, they define whether variable could be reassigned
 *  - variable name -- the way you call your variable in code
 *  - variable type -- e.g. number, string, etc.
 *  -
 */

// full declaration and assignment
let a: number = 1;
const b: number = 2;

// only variable declaration
let c;
let d: number;
// const e; // ❌ not allowed, because "TS1155: const declarations must be initialized."
// const f: number; // ❌ not allowed, because "TS1155: const declarations must be initialized."

// declaration and assignment without explicit type declaration
let g = 3; // "number" is an implicit type here