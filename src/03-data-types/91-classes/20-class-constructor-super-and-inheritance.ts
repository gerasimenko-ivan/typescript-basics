export {}
/*
 * Class - Constructor and Inheritance
 *
 * When a class extends another class, its constructor
 * must take the parent class constructor into account.
 *
 * 'super()' calls the parent class constructor.
 *
 * If a child class has its own constructor,
 * it must call 'super()' before accessing 'this'.
 */

class Country {
    name: string;

    // (Parent class) Country class has constructor (explicit)
    constructor(name: string) {
        this.name = name;
    }
}

class IslandCountry extends Country {
    islandCount: number | undefined;

    /*
     * The child class has no constructor.
     *
     * TypeScript provides an implicit constructor
     * that forwards its arguments to the parent constructor.
     */
}

class IslandCountryV2 extends Country {
    islandCount: number;
    constructor(name: string, islandCount: number) {
        // 'super()' must be called before accessing 'this'
        // in the constructor of a derived class.
        super(name);
        this.islandCount = islandCount;
    }
}

// The implicit constructor calls Country's constructor:
const newZealand = new IslandCountry('New Zealand');
newZealand.islandCount = 700;
console.log(newZealand);

const newZealandV2 = new IslandCountryV2('New Zealand', 700);
console.log(newZealandV2);