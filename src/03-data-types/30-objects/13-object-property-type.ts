export {};
/*
 * Object Property Type
 *
 * TypeScript infers the types of object properties
 * even when no explicit type is declared.
 *
 * A property can only be assigned a value compatible
 * with its inferred type.
 */

const country = {
    name: 'Australia',
    population: 26000000,
}

// Allowed ✅: assigning a number to a number property.
country.population = 5000000;

// Allowed ✅: assigning a string to a string property.
country.name = 'New Zealand';

// Not allowed ❌: type string is not assignable to type number
// country.population = '5 million';

console.log(country);