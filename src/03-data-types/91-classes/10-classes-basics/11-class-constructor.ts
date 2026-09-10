export {}
/*
 * Class - Constructor
 *
 * A constructor is a special method that is called automatically
 * when an instance of a class is created with new.
 *
 *  - new -- creates an instance
 *  - constructor -- initializes the instance
 */

// CountryOne class has a constructor by default, but it is empty
class CountryOne {
    name: string | undefined;
    /* Empty constructor. If you uncomment the line below nothing changes
       because default constructor behaves almost like empty one */
    // constructor() {}
}

const country1: CountryOne = new CountryOne();
console.log(country1); // output: CountryOne { name: undefined }

// CountryTwo class has a constructor, which initializes tne 'name' property
// of the new instance
class CountryTwo {
    name: string | undefined;

    constructor(name: string) {
        this.name = name;
    }
}

const country2: CountryTwo = new CountryTwo('Australia');
console.log(country2); // output: CountryTwo { name: 'Australia' }