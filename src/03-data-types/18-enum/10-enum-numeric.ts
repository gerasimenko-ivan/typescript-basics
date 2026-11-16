export {};
/*
 * Enum (Numeric Enum)
 *
 * An enum defines a set of named constants.
 *
 * Numeric enum members are assigned numeric values
 * automatically, starting from 0 by default.
 */

enum Status {
    Pending,
    Success,
    Error,
}

let status: Status = Status.Pending;

console.log(status);         // 0
console.log(Status.Success); // 1
console.log(Status.Error);   // 2

/*
 * Practical Example: HTTP Status Codes
 *
 * Numeric enum members can also be assigned explicit values.
 */
enum HttpStatus {
    Success = 200,
    ClientError = 404,
    ServerError = 500,
}

console.log(HttpStatus.Success);
console.log(HttpStatus.ClientError);
console.log(HttpStatus.ServerError);