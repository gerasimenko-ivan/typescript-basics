export {};
/*
 * Numeric Enum - Reverse Mapping
 *
 * Numeric enums support reverse mapping.
 * It allows to retrieve an enum member's name
 * from its numeric value using bracket notation: Enum[value].
 */

enum Status {
    Pending,   // 0
    Approved,  // 1
    Rejected   // 2
}

// Forward mapping (Name -> Number)
const code = Status.Approved; // 1

console.log(code); // 1

// Reverse mapping (Number -> Name)
const labelByIndex: string = Status[2]; // "Rejected"
const labelFromVar = Status[code]; // "Approved"

console.log(labelByIndex); // "Rejected"
console.log(labelFromVar); // "Approved"