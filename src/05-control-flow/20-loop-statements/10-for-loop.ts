export {}
/*
 * For
 *
 * 'for' is a loop with three parts:
 *  - initialization
 *  - condition
 *  - update
 * and a body that executes during each iteration.
 *
 * The initialization usually creates a loop variable.
 * The condition is checked before each iteration.
 * The update usually increments or decrements it after body execution.
 */

for (let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
}

console.log(); // add empty line to the log

for (let i = 50; i > 0; i -= 10) {
    console.log(`i = ${i}`);
}