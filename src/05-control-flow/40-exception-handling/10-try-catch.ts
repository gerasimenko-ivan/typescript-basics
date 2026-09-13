export {}
/*
 * Exception Handling
 *
 * 'throw new Error()' is used to throw an error.
 *
 * 'try...catch' is used to catch and handle errors.
 *
 * If an error is thrown inside the 'try' block,
 * execution of the 'try' block stops and the 'catch' block is executed.
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
    }
}

tryPrintLine('Hello World');
tryPrintLine('');