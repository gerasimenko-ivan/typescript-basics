/*
 * If
 *
 * 'if' is a control flow statement.
 *
 *  The condition inside 'if' parentheses is:
 *   - 'true'  - the block of code after if is executed
 *   - 'false' - the block of code after if is NOT executed
 */

if (2 > 3) {
    console.log('2 > 3 is true');
}

if (2 < 3) {
    // This block is executed
    console.log('2 < 3 is true');
}