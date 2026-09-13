export {}
/*
 * Try...Finally
 *
 * 'try...finally' block is used when you do not need
 * to catch an error, but still need some cleanup code
 * to be executed after the 'try' block.
 *
 * 'finally' is executed whether an error occurs or not.
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
    } finally {
        console.log('Print line finished execution.');
    }
}

tryPrintLine('Hello World');
tryPrintLine('');