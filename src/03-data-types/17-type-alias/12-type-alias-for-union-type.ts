export {};
/*
 * Type Alias for Union Type
 *
 * A type alias introduces a new name for a union type.
 *
 * It is useful because we can reuse the same type
 * instead of repeating the union type explicitly.
 *
 * More about Union Types:
 *   src/03-data-types/15-union-type
 */

type UserId = string | null;

function findUser(userId: UserId) {
    if (userId === null) {
        console.log('Skip null user search.');
    } else {
        console.log(`User with id '${userId}' found.`);
    }
}

findUser('AB_133');
findUser(null);