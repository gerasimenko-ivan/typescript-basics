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

console.log(status); // 0

status = Status.Success;
console.log(status); // 1

status = Status.Error;
console.log(status); // 2