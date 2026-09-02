/**
 * Type inference
 *
 * it is when TypeScript knows the type automatically
 */

// 'Peter' is a 'string' type in TS,
// so 'string' type is inferred for variable 'testerName'
let testerName = 'Peter';
let yearsOfExperience = 10; // 'number' type is inferred

console.log('Tester Name:', testerName);
console.log('Years Of Experience:', yearsOfExperience);


// Reassigning values - correct types
testerName = 'Josh'; // ✅ allowed
yearsOfExperience = 11; // ✅ allowed


// Reassigning values - incorrect types
// Error: "TS2322: Type number is not assignable to type string" in code below
// testerName = 1; // ❌ not allowed
// Error: "TS2322: Type string is not assignable to type number" in code below
// yearsOfExperience = "10"; // ❌ not allowed


console.log('\nNew values:');
console.log('Tester Name:', testerName);
console.log('Years Of Experience:', yearsOfExperience);