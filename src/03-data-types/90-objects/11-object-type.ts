export {}
/*
 * Object - Type
 *
 * The 'type' keyword can be used to define a custom object type.
 */

// Country is a custom object type
type Country = {
    name: string,
    capital: string,
    population: number,
}

// country1 is an object of type Country
const country1: Country = {
    name: 'Australia',
    capital: 'Canberra',
    population: 26000000,
}

// country2 is an object of type Country
const country2: Country = {
    name: 'New Zealand',
    capital: 'Wellington',
    population: 5000000,
}

/*
 * We can use the Country type for multiple objects.
 *
 * TypeScript checks that each object has the required
 * properties with the correct types.
 */