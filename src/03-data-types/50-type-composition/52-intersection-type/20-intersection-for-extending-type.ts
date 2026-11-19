export {};
/*
 * Extending Types with Intersection
 *
 * An intersection type can extend an existing type
 * by combining it with additional properties,
 * without modifying the original type.
 */

type User = {
    id: number;
    name: string;
};

type UserWithEmail = User & {
    email: string;
};

const userWithEmail: UserWithEmail = {
    id: 1,
    name: 'John',
    email: 'john@example.com',
};

type UserWithPhone = User & {
    phone: string;
};

const userWithPhone: UserWithPhone = {
    id: 1,
    name: 'John',
    phone: '02200339876',
};

console.log(userWithEmail);
console.log(userWithPhone);