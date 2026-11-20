export {};
/*
 * Undefined and Null in condition
 *
 * undefined and null are falsy values.
 *
 * When they are used as an if condition,
 * the else branch is executed.
 *
 * This can be useful when we want to execute code
 * only when a value is truthy (not null or undefined).
 */


function logMessage(message: string | undefined | null): void {
    if (message) {
        console.log(`TRUE  branch was executed. MESSAGE: '${message}'`);
    } else {
        console.log(`FALSE branch was executed. MESSAGE: '${message}'`);
    }
}

logMessage('Hello World'); // non-empty string is truthy
logMessage(''); // empty string is falsy
logMessage(undefined); // undefined is falsy
logMessage(null);      // null is falsy