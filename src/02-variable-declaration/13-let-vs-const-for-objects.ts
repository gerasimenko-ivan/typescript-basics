/**
 * let and const in objects declaration
 *
 * Skip it if you are not familiar with objects yet.
 */

let userLet = {
    name: "John"
};
const userConst = {
    name: "Alice"
};

console.log(`userLet - ${userLet.name} / userConst - ${userConst.name}`);

// "let object" can be reassigned
userLet = { name: "Nickolas" }; // ✅ allowed

// "const object" can NOT be reassigned
// There is an error: "TS2588: Cannot assign to userConst because it is a constant."
// If you try to uncomment the code below:
// userConst = { name: "Donna" }; // ❌ not allowed

// but property of a "const object" is allowed to be changed
userConst.name = "Donna"; // ✅ allowed

console.log('\nField of a "const object" was changed:');
console.log(`userLet - ${userLet.name} / userConst - ${userConst.name}`);