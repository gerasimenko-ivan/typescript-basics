export {}
/*
 * Good Practice: Don't Ignore Errors
 *
 * Good practice:
 * A catch block should handle the error appropriately.
 * If the error cannot be handled there, it should usually
 * be logged or rethrown.
 * For example:
 *  - log the error
 *  - recover from the error
 *  - show a user-friendly message
 *  - rethrow the error
 *
 * Bad:
 * Catch block is empty.
 * An empty 'catch' block silently ignores the error.
 * This can make errors difficult to find and debug.
 */

function printLine(line: string): void {
    if (line.length === 0) {
        throw new Error('Line is empty');
    }
    console.log(line);
}

// GOOD:
function tryPrintLineGood(line: string): void {
    try {
        printLine(line);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

tryPrintLineGood('Hello World');
tryPrintLineGood('');

// BAD:
function tryPrintLineBad(line: string): void {
    try {
        printLine(line);
    } catch (error) {}
}

tryPrintLineBad('Hello World');
tryPrintLineBad(''); // error is silently ignored, there are no logs, no traces