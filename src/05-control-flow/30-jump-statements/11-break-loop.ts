export {}
/*
 * Break - In Loop
 *
 * 'break' stops the current loop
 * and continues execution after the loop.
 */

for(let i = 0; i < 10; i++) {
    if (i === 5) {
        // When i = 5, 'break' terminates the loop
        // and continues execution after the loop.
        console.log('Skip loop execution after \'break\'');
        break;
    }
    console.log(`for: i = ${i}`);
}


let i = 0;
do {
    i++;

    if (i > 2) {
        console.log('Skip loop execution after \'break\'');
        break;
    }

    console.log(`while: i = ${i}`);
} while (i < 5);