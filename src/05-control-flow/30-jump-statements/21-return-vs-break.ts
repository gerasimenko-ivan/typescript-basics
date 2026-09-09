export {}
/*
 * Return vs Break
 *
 * These example emphasizes that:
 *  - 'return' terminates function/method execution
 *  - 'break' terminates loop execution,
 *    while the function/method continues after the loop
 */


/*
 * Break example:
 * output 'function breakInLoop: after loop' is printed
 */

function breakInLoop(): void {
    console.log('function breakInLoop: before loop');
    for (let i = 0; i < 10; i++) {
        console.log(`-- function breakInLoop: before 'break' i=${i}`);
        if (i > 1) {
            console.log(`-- function breakInLoop: break -- loop terminated`);
            break;
        }
        console.log(`-- function breakInLoop: after  'break' i=${i}`);
    }
    console.log('function breakInLoop: after loop');
}

breakInLoop();


/*
 * Return example:
 * output 'function returnInLoop: after loop' is not printed
 * because 'return' terminates execution of returnInLoop()
 */

function returnInLoop(): void {
    console.log('\nfunction returnInLoop: before loop');
    for (let i = 0; i < 10; i++) {
        console.log(`-- function returnInLoop: before 'return' i=${i}`);
        if (i > 1) {
            console.log(`-- function returnInLoop: return -- function terminated`);
            return;
        }
        console.log(`-- function returnInLoop: after  'return' i=${i}`);
    }
    // the line below is not executed:
    console.log('function returnInLoop: after loop');
}

returnInLoop();