export {};
/*
 * Type Alias
 *
 * A type alias creates a new name for an existing type.
 */

// StringTypeAlias is an alias for the string type
type StringTypeAlias = string;

const value: StringTypeAlias = 'Hello World!';
console.log(value);