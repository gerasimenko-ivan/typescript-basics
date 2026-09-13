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
 * The update usually increments or decrements it.
 */

for (let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
}

console.log(); // add empty line to the log

for (let i = 50; i > 0; i -= 10) {
    console.log(`i = ${i}`);
}