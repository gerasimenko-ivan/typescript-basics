export {}
/*
 * While
 *
 * 'while' is a loop which has:
 *  - condition
 *  - body that executes during each iteration
 *
 * The condition is checked before each iteration.
 * The loop executes while condition is true.
 */

let i = 0;
while(i < 5) {
    console.log(`i = ${i}`);
    i++;
}

console.log(); // add empty line to the log

let j = 50;
while(j > 0) {
    console.log(`j = ${j}`);
    j -= 10;
}