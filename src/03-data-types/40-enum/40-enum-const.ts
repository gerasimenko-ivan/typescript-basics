export {};
/*
 * Const Enum
 *
 * A const enum is a compile-time construct.
 *
 * Unlike a regular enum, it is normally removed during compilation.
 * Its member values are inlined wherever they are used.
 */

const enum Status {
    Pending = 'Pending',
    Success = 'Success',
    Error = 'Error',
}

console.log(Status.Pending); // Output: Pending

/*
 * One of the differences in behaviour:
 *
 * A const enum does not normally exist as a runtime object.
 * Therefore, it cannot be accessed as a whole object at runtime.
 */
// console.log(Status); // ❌ not allowed

// More examples of differences in the file below.