export {}
/*
 * Object
 *
 * An object is a collection of related data represented
 * by properties and their values.
 */


const country = {
    name: 'Australia',
    capital: 'Canberra',
    population: 26000000,
}

/*
 * country - is an object with 3 properties:
 * name, capital, and population
 *
 * TypeScript infers the type of country as:
 * {
 *   name: string,
 *   capital: string,
 *   population: number,
 * }
 */