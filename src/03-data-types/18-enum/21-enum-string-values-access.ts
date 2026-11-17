export {};
/*
 *
 */

enum Status {
    Pending = 'Pending',
    Success = 'Success',
    Error = 'Error',
}

console.log(Status.Success);
console.log(Status['Success']);
console.log(Status[Status.Success]);
// console.log(Status[1]); // ❌ not allowed

console.log(Status);

for (let statusKey in Status) {
    console.log(statusKey);
    // console.log(Status[statusKey]); // ❌ not allowed
}