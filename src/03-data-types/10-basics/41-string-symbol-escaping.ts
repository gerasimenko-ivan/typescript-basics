export {}
/*
 * Escape Symbols in Strings
 *
 * Escape the string delimiter if you want to use it
 * inside a string.
 *
 * Escape a backslash (\\) to include a literal backslash.
 */

// Single-quoted string: escape the apostrophe.
const str1 = 'This is Henry\'s jacket. He said "This is my jacket". Directory C:\\user\\docs';

// Double-quoted string: escape the double quotes.
const str2 = "This is Henry's jacket. He said \"This is my jacket\". Directory C:\\user\\docs";

// Backticks (template literal): apostrophes and double quotes need no escaping.
const str3 = `This is Henry's jacket. He said "This is my jacket". Directory C:\\user\\docs";`;

// But it's generally used for interpolation or multiline strings.
// Escape \${ to display the interpolation syntax literally.
const str4 = `MULTILINE:
Str1: ${str1}
Str2: ${str2}
But template literal still needs escapes for $ + {, e.g. \${variable}`;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);