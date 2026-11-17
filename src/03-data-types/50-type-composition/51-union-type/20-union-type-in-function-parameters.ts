export {};
/*
 * Union Types in Function Parameters
 *
 * A union type becomes especially useful when different kinds of
 * values are valid in the same context
 * (e.g. a function might accept either a string ID or a numeric ID).
 */

function findUser(id: string | number): void {
    console.log(`Searching for user with ID: ${id}`);
}

findUser(123456);    // number argument is valid
findUser("G13_45b"); // string argument is valid
// findUser(true);      // ❌ boolean argument is not allowed