export {};
/*
 * Undefined
 *
 * 'undefined' is both a value and a type.
 * The value 'undefined' represents the absence of a value.
 * It is a value (and a type) that means that variable has not been assigned yet
 *
 * A variable can contain 'undefined' when:
 *   - it has been declared but not initialized, or
 *   - its type explicitly allows 'undefined'.
 */
// TODO:

// not initialized variable
let car: string;

// used only to demonstrate the runtime value -- not-initialized variable holds 'undefined' value
// @ts-ignore -- suppresses error: "TS2454: Variable car is used before being assigned."
console.log('Car', car); // output: Car undefined

car = 'Toyota';
console.log('Car', car); // output: Car Toyota

// 'undefined' is NOT part of the type 'string', so 'undefined' value can NOT be assigned to this variable
// car = undefined; // causes error ❌ "TS2322: Type undefined is not assignable to type string"


let car2: string | undefined; // 'undefined' used as one of the types for variable: string or undefined
console.log('Car2', car2);

car2 = 'Ford';
console.log('Car2', car2);

car2 = undefined; // actually I am not sure why a developer should use this, I guess it is a bad practice, as you should use null type for this purpose
console.log('Car2', car2);