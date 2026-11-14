export {};
/*
 * Type Alias for Object Type
 */

// TypeScript can infer the object type automatically
const user1 = {
    name: 'John',
    id: 1111,
}

// Explicit inline object type provided
const user2: { name: string; id: number } = {
    name: 'Peter',
    id: 2222,
};

// Type alias for object type
type User = { name: string; id: number };

// Using type alias
const user3: User = {
    name: 'Rob',
    id: 3333,
};

const user4: User = {
    name: 'Tim',
    id: 4444,
}

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

/*
 * A type alias allows us to define an object structure once
 * and reuse it in multiple places.
 *
 * It makes code easier to maintain and refactor.
 *
 * For example, if we add a new property to User,
 * TypeScript will check all variables using this type.
 *
 * Note: TypeScript uses structural typing, so user1 and user2
 * can still have types compatible with User, even though
 * they do not explicitly use the User type alias.
 */