export {};
/*
 * Type Alias for Primitive Type
 *
 * A type alias allows you to change the underlying type
 * in one place without modifying all the places
 * where that type is used.
 */

type UserName = string;
/*
 * For example, UserName can be changed from string
 * to string | null if necessary:
 */
// type UserName = string | null;

type UserId = number;

const userName: UserName = 'Peter';
const userId: UserId = 1234;

console.log(userName);
console.log(userId);