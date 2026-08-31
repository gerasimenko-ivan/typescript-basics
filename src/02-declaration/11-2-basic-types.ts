/**
 * undefined, null
 */

// type -- undefined
let textUndefinedDemo: string; // text2 = undefined -- value hasn't been assigned

// 'ts-ignore' added below to ignore error: "TS2454: Variable textUndefinedDemo is used before being assigned."
// for study purposes
// @ts-ignore
console.log(`\ntextUndefinedDemo = '${textUndefinedDemo}'`);
textUndefinedDemo = "Text is defined now :)";
console.log(`textUndefinedDemo = '${textUndefinedDemo}'`);


// type -- null
// !!!IMPORTANT!!! Code below is valid TypeScript, but in normal application code it is rarely useful
// because nullDemo can olny contain 'null' value in this case
let nullDemo: null = null;
console.log(`\nnullDemo = '${nullDemo}'`);


// Rare:
// let b: bigint = 123n; // TODO: what's a problem???
let symb: symbol = Symbol("ID");