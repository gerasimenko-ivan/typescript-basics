export {};
/*
 * Intersection and Never
 *
 * Intersection types do not overwrite conflicting properties.
 * They require the properties to satisfy both types.
 */

type Person = {
    id: number;
};

type Product = {
    id: string;
};

type PersonProduct = Person & Product;

/*
 * The intersection type itself is valid, but an object satisfying it
 * cannot be created because the id property has type never.
 *
 * Person requires id: number.
 * Product requires id: string.
 * PersonProduct therefore requires id: never.
 */
// const item: PersonProduct = {
//     id: 123, // ❌ not allowed
// };
