export {};
/*
 * Union Type in Function Return Value
 *
 * For example: function can return a value of type User
 * or null if the user is not found
 */

type User = {
    id: number;
    name: string;
}

/*
 * Function return type is 'User | null'
 * means it can return a User object or null
 */
function findUser(id: number): User | null {
    if (id === 1) {
        return { id: 1, name: 'Jose' };
    }

    return null; // user not found, so return 'null'
}

console.log(findUser(1));
console.log(findUser(2));
console.log(findUser(-9999));