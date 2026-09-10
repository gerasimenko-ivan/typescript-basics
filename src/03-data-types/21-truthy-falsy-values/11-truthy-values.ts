export {}
/*
 * Truthy Values
 *
 * Values of different data types can be used as an 'if' condition.
 *
 * A value is called 'truthy' if it is treated as 'true'
 * when used as an 'if' condition.
 *
 * All values are truthy except the falsy values.
 */

function trueOrFalse(val: unknown): void {
    if (val) {
        console.log(`'${val}': TRUE`);
    } else {
        console.log(`'${val}': FALSE`);
    }
}

// There is a set of truthy values below:
trueOrFalse(true);
trueOrFalse('false'); // non-empty string
trueOrFalse('abc');  // non-empty string
trueOrFalse('0');    // non-empty string
trueOrFalse(1);      // non-zero number
trueOrFalse(-1);     // non-zero number
trueOrFalse({});         // empty object — still truthy
trueOrFalse({ a: 123 }); // definitely non-empty object
trueOrFalse([]);         // empty array — still truthy
trueOrFalse([1, 2, 3]);  // definitely non-empty array