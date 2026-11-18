export {};
/*
 * Type Aliases for Primitive Types
 *
 * Type aliases can be used to give names to primitive types.
 *
 * Interfaces cannot directly describe primitive types.
 */

type SuperStringAlias = string;

const message: SuperStringAlias = 'Hello, TypeScript!';

console.log(message);

/*
 * Interfaces cannot be used to create aliases for primitive types:
 */
// interface MegaStringAlias string;   // ❌ not allowed
// interface MegaStringAlias = string; // ❌ not allowed