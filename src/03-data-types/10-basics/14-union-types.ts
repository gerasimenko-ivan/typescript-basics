// TODO: it's better to introduce union types before 'undefined' and 'null'

let funnyVariable: string | number;

funnyVariable = 123;
console.log('funnyVariable', funnyVariable);

funnyVariable = 'Hello World!';
console.log('funnyVariable', funnyVariable);

/* Now it looks like combining types 'string | number' makes no sense (and it actually does not).
 * But it will be more clear after moving to 'null' type, classes and interfaces
 */