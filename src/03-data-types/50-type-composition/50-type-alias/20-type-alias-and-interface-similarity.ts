/*
 * Type Alias and Interfaces
 *
 * Similarity:
 *   - Both can describe the structure of an object.
 *   - Both can describe properties (names and types).
 *   - Both can describe methods (names, parameters and return types).
 */

interface UserInterface {
    name: string;
    id: number;
    log(full: boolean): void;
}

type UserType = {
    name: string;
    id: number;
    log(full: boolean): void;
}

const user1: UserInterface = {
    name: 'Jim',
    id: 1,
    log(full: boolean) {
        const logText =
            `User name: ${this.name}` +
            (full ? `, id: ${this.id}` : '');

        console.log(logText);
    }
}

const user2: UserType = {
    name: 'Jim',
    id: 1,

    /*
     * The log() methods have different implementations,
     * but both satisfy the same method signature:
     * one boolean parameter and a void return type.
     */
    log(full: boolean) {
        if(full) {
            console.log(`User\n - name: ${this.name}\n - id: ${this.id}`);
        } else {
            console.log(`User name: ${this.name}`);
        }
    }
}

user1.log(true);
user2.log(true);