export {}
/*
 * Switch
 *
 * Switch is a control flow statement.
 *
 * It allows you to compare a variable to a set of constants
 * and execute corresponding blocks of code.
 */

let letter1 = 'A';
let letter2 = 'C';
let letter3 = 'D';

function whichLetter(value: string) {
    /*
     * 'value' is compared with each 'case' value.
     *
     * When a matching case is found, execution starts
     * from that case and continues through the following
     * cases until 'break', 'return', or the end of 'switch'.
     *
     * This is called fall-through.
     *
     * 'break' can be used to stop execution:
     *   src/05-control-flow/30-jump-statements/10-break-switch.ts
     */
    switch (value) {
        case 'A':
            console.log('Print: A');
        case 'B':
            console.log('Print: B');
        case 'C':
            console.log('Print: C');
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