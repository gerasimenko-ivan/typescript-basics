export {};
/*
 * Do...While
 *
 * 'do...while' is a loop which has:
 *  - body that executes during each iteration
 *  - condition
 *
 * The loop executes while condition is true.
 * Unlike 'while', the condition is checked after the body executes.
 */

let i = 0;
do {
    console.log(`i = ${i}`);
    i++;
} while (i < 5);

console.log(); // add empty line to the log

let j = 50;
do {
    console.log(`j = ${j}`);
    j -= 10;
} while (j > 0);

console.log(); // add empty line to the log

let k = 100;
do {
    console.log(`k=${k}`); // body executes at least once
} while (i < 5);