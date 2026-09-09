export {}
/*
 * Return
 *
 * 'return' ends execution of the current function/method.
 * It can optionally provide a value back to the caller.
 */

let letter1 = 'A';
let letter2 = 'C';
let letter3 = 'D';

function printLetterMessage(value: string): void {
    switch (value) {
        case 'A':
            console.log('Print: A');
            return; // exits the function 'printLetterMessage'
        case 'B':
            console.log('Print: B');
            return; // exits the function 'printLetterMessage'
        case 'C':
            console.log('Print: C');
            return; // exits the function 'printLetterMessage'
        default:
            console.log('Print: not ABC');
    }
}

console.log('letter1 checking...')
printLetterMessage(letter1);

console.log('\nletter2 checking...')
printLetterMessage(letter2);

console.log('\nletter3 checking...')
printLetterMessage(letter3);


/*
 * Another way to write the code above:
 *  - return a string from 'getLetterMessage()'
 *  - print the returned value outside the function
 */

function getLetterMessage(value: string): string {
    switch (value) {
        case 'A':
            return 'Print: A'; // exits the function getLetterMessage, returns string value
        case 'B':
            return 'Print: B'; // exits the function getLetterMessage, returns string value
        case 'C':
            return 'Print: C'; // exits the function getLetterMessage, returns string value
        default:
            return 'Print: not ABC';
    }
}

function printLetterMessageV2(value: string): void {
    console.log(getLetterMessage(value));
}

console.log('\n\nletter1 checking...')
printLetterMessageV2(letter1);

console.log('\nletter2 checking...')
printLetterMessageV2(letter2);

console.log('\nletter3 checking...')
printLetterMessageV2(letter3);