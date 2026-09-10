export {}
/*
 * Undefined in condition
 *
 * 'undefined' is a falsy value.
 *
 * When 'undefined' is used as an 'if' condition,
 * the 'else' branch is executed.
 *
 * This can be useful when we want to execute code
 * only when a value is defined.
 */


let message: string | undefined = 'Hello World';

if (message) {
    console.log(message); // executed
} else {
    console.log('false branch was executed');
}

message = undefined;

if (message) {
    console.log(message);
} else {
    console.log('false branch was executed'); // executed
}