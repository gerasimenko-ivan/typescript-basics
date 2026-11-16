export {};
/*
 * Enum (Numeric Enum)
 *
 * The initial numeric value can be explicitly assigned.
 * Subsequent numeric members without explicit values
 * are assigned by incrementing the previous member's value.
 */

enum Status {
    Pending = 99,
    Success,
    Error,
}

console.log(Status.Pending); // 99
console.log(Status.Success); // 100
console.log(Status.Error);   // 101

enum StatusNew {
    Pending = 100,
    Success,
    // numbering continues from the most recently assigned
    // numeric value, not necessarily the first one
    Error = 0,
    NoInfo,
}

console.log(StatusNew.Pending); // 100
console.log(StatusNew.Success); // 101
console.log(StatusNew.Error);   // 0
console.log(StatusNew.NoInfo);  // 1