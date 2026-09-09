export {}
/*
 * Break
 *
 * 'break' stops execution of the current loop or 'switch'
 * statement and continues execution after it.
 */

let letter1 = 'A';
let letter2 = 'C';
let letter3 = 'D';

function whichLetter(value: string) {
    switch (value) {
        case 'A':
            console.log('Print: A');
            break; // exits the current 'switch'
        case 'B':
            console.log('Print: B');
            break; // exits the current 'switch'
        case 'C':
            console.log('Print: C');
            break; // exits the current 'switch'
        default:
            console.log('Print: not ABC');
    }
}

console.log('letter1 checking...')
whichLetter(letter1);

console.log('\nletter2 checking...')
whichLetter(letter2);

console.log('\nletter3 checking...')
whichLetter(letter3);

/*
 * About 'switch', see also:
 *   └──  src/05-control-flow/10-conditional-statements/12-switch.ts
 */