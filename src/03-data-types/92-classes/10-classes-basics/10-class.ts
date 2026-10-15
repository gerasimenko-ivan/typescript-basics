export {}
/*
 * Class
 *
 * A class is a definition for creating objects with
 * a particular structure and behaviour.
 *
 * Class is similar to Object in some ways:
 *  - it can have properties and methods
 *  - its name can be used as a type
 *
 * A class also provides additional features:
 *  - it can create objects using 'new'
 *  - it can have constructors
 *  - it can use inheritance
 *  - it can define access modifiers such as private and protected
 *  - it can have static properties and methods
 *  - it can be abstract
 *  - ...
 */

class Country {
    name: string | undefined;
    capital: string | undefined;
}

// Using class Country as a type
const country1: Country = { name: 'Australia', capital: 'Canberra' };

// Creating an instance of class Country -- only possible with class
const country2: Country = new Country();

/*
 * The advantages of creating an object with 'new Country()'
 * will become clearer when we introduce the class constructor.
 */