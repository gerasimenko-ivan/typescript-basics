export {}
/*
 * Falsy Values
 *
 * Values of different data types can be used as an 'if' condition.
 *
 * A value is called 'falsy' if it is treated as 'false' * when used as an 'if' condition.
 */

function trueOrFalse(val: unknown): void {
    if (val) {
        console.log(`'${val}': TRUE`);
    } else {
        console.log(`'${val}': FALSE`);
    }
}

// Falsy values include:
trueOrFalse(false);
trueOrFalse(''); // empty string
trueOrFalse(0); // zero number
trueOrFalse(-0); // negative zero -- same truthiness as 0
trueOrFalse(NaN); // Not-a-Number
trueOrFalse(undefined);
trueOrFalse(null);