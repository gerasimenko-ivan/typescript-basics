export {};
/*
 * Enum with String Values
 *
 * Enum members can also have explicitly assigned string values.
 */

enum Status {
    Pending = 'Pending',
    Success = 'Success',
    Error = 'Error',
    // Warning, // ❌ Not allowed. Enum member must have initializer
}

console.log(Status.Pending); // Pending
console.log(Status.Success); // Success
console.log(Status.Error); // Error