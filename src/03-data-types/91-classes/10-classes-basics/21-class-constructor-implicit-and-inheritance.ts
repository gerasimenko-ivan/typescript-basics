export {}
/*
 * Class - Constructor and Inheritance
 *
 * You need to take into account parent class constructor
 * when creating a child class.
 *
 * super() - is a call of parent's class constructor:
 *  - super could be omitted if parent and child class
 *    have implicit constructor, otherwise...
 *  - super must be called in child class constructor
 */

class Country {
    name: string | undefined;

    // (Parent class) Country class has implicit constructor
}

class IslandCountry extends Country {
    islandCount: number | undefined;

    // IslandCountry also has an implicit constructor.
    // The automatically provided implicit constructor calls super().
}

class IslandCountryV2 extends Country {
    islandCount: number;
    constructor(name: string, islandCount: number) {
        super(); // Must call the parent constructor

        this.name = name;
        this.islandCount = islandCount;
    }
}

const newZealand = new IslandCountry();
newZealand.name = 'New Zealand';
newZealand.islandCount = 700;
console.log(newZealand);

const newZealandV2 = new IslandCountryV2('New Zealand', 700);
console.log(newZealandV2);