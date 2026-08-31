/**
 * let and const in basic types declaration
 *
 * let -- can be reassigned
 * const -- can NOT be reassigned
 */

let age: number = 25;
let userName: string = "Alice";
const placeOfBirth: string = "Auckland";

console.log(`${userName}; ${age}; ${placeOfBirth}`);

// Reassigning variables:
age = 100; // ✅ allowed
userName = "Donna"; // ✅ allowed

// Consts can NOT be reassigned
// There is an error: "TS2588: Cannot assign to 'placeOfBirth' because it is a constant."
// If you uncomment the line below and execute this code:
// placeOfBirth = 'Brisbane'; // ❌ not allowed

console.log('\nVariables are changed:');
console.log(`${userName}; ${age}; ${placeOfBirth}`);
