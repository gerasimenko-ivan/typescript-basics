export {};
/*
 * String Enum: Accessing Values
 *
 * - Access enum members using dot notation or bracket notation.
 * - String enums do not have reverse mappings.
 * - Enum keys can be accessed using Object.keys().
 */

enum Status {
    Pending = 'Pending',
    Success = 'Success',
    Error = 'Error',
}

// Access enum members
console.log(Status.Success);
console.log(Status['Success']);
console.log(Status[Status.Success]);
// console.log(Status[1]); // ❌ not allowed

// Display the entire enum object
console.log(Status);

// Iterate over enum keys
for (let statusKey in Status) {
    console.log(statusKey);
    // console.log(Status[statusKey]); // ❌ not allowed
}

// Iterate over enum keys and access their values
for (const statusKey of Object.keys(Status) as (keyof typeof Status)[]) {
    console.log(statusKey);
    console.log(Status[statusKey]);
}

// Iterate over enum values
for (const statusValue of Object.values(Status)) {
    console.log(statusValue);
}