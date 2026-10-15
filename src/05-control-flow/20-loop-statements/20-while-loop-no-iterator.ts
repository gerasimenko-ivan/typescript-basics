export {};
import { setTimeout } from 'node:timers/promises';

/*
 * While
 *
 * Here is an example of a while loop with a condition
 * that is not based on a loop variable.
 *
 * The loop continues while the current time is before
 * the specified future time.
 */

const futureTime = Date.now() + 5000;

let tick = 0;

async function timerFiveSeconds(): Promise<void> {
    console.log('Five second timer:');

    // condition depends on time
    while (Date.now() < futureTime) {
        // wait for 1 second
        await setTimeout(1000);
        console.log(` tick ${++tick}`);
    }

    console.log('Done!');
}

timerFiveSeconds();

