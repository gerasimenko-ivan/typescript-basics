export {}
/*
 * Object - Method
 *
 * An object can have methods as properties.
 *
 * A method is a function stored in an object.
 *
 * When a type describes a method, each object must provide
 * its own compatible implementation of that method.
 */

type Country = {
    name: string,
    population: number,

    // description of a method
    increasePopulationBy(n: number): void,
}

const country1: Country = {
    name: 'Australia',
    population: 26000000,
    // implementation of the method
    increasePopulationBy(n: number) {
        this.population += n;
    }
}

const country2: Country = {
    name: 'New Zealand',
    population: 5000000,
    /*
     * This object must also provide an implementation
     * of the increasePopulationBy() method.
     *
     * The implementation can be different from country1's.
     */
    increasePopulationBy(n: number) {
        this.population += 1000 * n;
    }
}