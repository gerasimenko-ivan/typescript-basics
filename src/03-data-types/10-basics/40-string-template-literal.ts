export {};
/*
 * String Template Literals
 *
 * Backticks allow interpolation with ${...} and multiline strings
 */

const australia = 'Australia';
const newZealand = 'New Zealand';
const pi = 3.1415926535;
const date = new Date();

console.log(`Country 1: "${australia}", Country 2: '${newZealand}'`);

// multiline
console.log(`Pi: ${pi}
Date: ${date.toISOString()}`);