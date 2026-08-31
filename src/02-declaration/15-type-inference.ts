/**
 * Type inference
 *
 * it is when TypeScript knows the type automatically
 */

let testerName = "Ivan"; // string. "Ivan" is a string in TS, so string type for variable "testerName" is inferred
let yearsOfExperience = 10; // number
let automationEngineer = true; // boolean

console.log("Tester Name:", testerName);
console.log("Years Of Experience:", yearsOfExperience);
console.log("Automation Engineer:", automationEngineer);


// Error: "TS2322: Type number is not assignable to type string"
// testerName = 1; // ❌ not allowed
testerName = "Peter"; // ✅ allowed

// Error: "TS2322: Type string is not assignable to type number"
// yearsOfExperience = "10"; // ❌ not allowed
yearsOfExperience = 11; // ✅ allowed

// Error: "TS2322: Type string is not assignable to type boolean"
// automationEngineer = "false"; // ❌ not allowed
automationEngineer = false; // ✅ allowed


console.log('\nVariables are changed:');
console.log("Tester Name:", testerName);
console.log("Years Of Experience:", yearsOfExperience);
console.log("Automation Engineer:", automationEngineer);