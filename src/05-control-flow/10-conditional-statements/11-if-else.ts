/*
 * If...Else
 *
 * 'if...else' is a control flow statement.
 *
 *  The condition inside 'if' parentheses is:
 *   - 'true'  - the block of code after if is executed
 *   - 'false' - the block of code after else is executed
 */

if (2 > 3) {
    console.log('2 > 3 is true');
} else {
    // This block is executed
    console.log('Executed. 2 > 3 is false');
}

if (2 < 3) {
    // This block is executed
    console.log('Executed. 2 < 3 is true');
} else {
    console.log('2 < 3 is false');
}