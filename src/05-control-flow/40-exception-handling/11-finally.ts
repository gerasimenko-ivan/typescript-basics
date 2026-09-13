export {}
/*
 * Finally
 *
 * 'finally' is used after 'try' or 'try...catch' blocks.
 * It is executed whether an error occurs or not.
 *
 * It is used for cleanup:
 *  - closing a file
 *  - closing a database connection
 *  - stopping a timer
 *  - ...
 */

function printLine(line: string): void {
    if (line.length === 0) {
        throw new Error('Line is empty');
    }
    console.log(line);
}

function tryPrintLine(line: string): void {
    try {
        printLine(line);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Print line finished execution.');
    }
}

tryPrintLine('Hello World');
tryPrintLine('');