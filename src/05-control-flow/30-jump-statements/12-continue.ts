export {}
/*
 * Continue
 *
 * 'continue' skips the rest of the current loop iteration
 * and starts the next iteration.
 */

for(let i = 0; i < 10; i++) {
    if (i === 5 || i === 7 || i === 8) {
        // for i = 5, 7, and 8, log after if is not printed, because
        // 'continue' skips the rest of the loop code
        // and starts next execution of the loop
        console.log('Start loop from the beginning after \'continue\'');
        continue;
    }
    console.log(`for: i = ${i}`);
}


let i = 0;
do {
    i++;

    if (i > 1 && i < 4) {
        console.log('Start loop from the beginning after \'continue\'');
        continue;
    }

    console.log(`while: i = ${i}`);
} while (i < 5);