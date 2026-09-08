export {}
/*
 * Object - Property
 *
 * A property is a named value stored in an object.
 * A property has a name and a type.
 * A property can also be optional.
 */

type Country = {
    name: string,
    // '?' after the property name makes the property optional
    population?: number,
}

const country1: Country = {
    name: 'Australia',
    population: 26000000,
}

const country2: Country = {
    name: 'New Zealand',
    // 'population' is optional, so it can be omitted
}

/*
 * Code below causes an error:
 *
 * 'Property name is missing in type { population: number; }
 * but required in type Country'
 *
 * 'name' is a required property, so it must be present in the object. */
/*
const country3: Country = {
    population: 123456,
}
 */