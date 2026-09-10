export {}
/*
 * Undefined and Null in condition
 *
 * 'undefined' and 'null' are falsy values.
 *
 * When they are used as an 'if' condition,
 * the 'else' branch is executed.
 *
 * This can be useful when we want to execute code
 * only when a value is truthy.
 */


let message: string | undefined | null = 'Hello World';

if (message) {
    console.log(message); // executed
} else {
    console.log('false branch was NOT executed'); // NOT executed
}

// undefined
message = undefined;
if (message) {
    console.log(message);
} else {
    console.log(`false branch was executed. message='${message}'`); // executed
}

// null
message = null;
if (message) {
    console.log(message);
} else {
    console.log(`false branch was executed. message='${message}'`); // executed
}