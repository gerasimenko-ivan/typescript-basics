export {}
/*
 * String Raw
 *
 * String.raw is used string contains many backslashes
 * and it is better for readability not to escape them
 */

const str1 = String.raw`Path example: C:\user\docs. New line sequence: \n`;

console.log(str1);

// compare
const str2 = `Path example: C:\\user\\docs. New line sequence: \\n and New\nline`;

console.log(str2);