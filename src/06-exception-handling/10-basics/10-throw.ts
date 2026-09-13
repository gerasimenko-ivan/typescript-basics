export {}
/*
 * Throw
 *
 * 'throw' is used to throw an error.
 *
 * When an error is thrown, normal execution stops
 * and the error is passed to the caller.
 */

function printLine(line: string): void {
    if (line.length === 0) {
        throw new Error('Line is empty');
    }

    console.log(line);
}

printLine('Hello World'); // output: Hello World
printLine(''); // output: Error: Line is empty, and error trace