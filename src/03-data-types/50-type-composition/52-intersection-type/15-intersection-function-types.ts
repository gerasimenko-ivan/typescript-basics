export {};
/*
 * Intersection of Function Types
 *
 * Intersection types can combine multiple function signatures.
 * The resulting type must satisfy all combined signatures.
 */

type StringHandler = (value: string) => void;
type NumberHandler = (value: number) => void;

type CombinedHandler = StringHandler & NumberHandler;

const handler: CombinedHandler = (value: string | number) => {
    console.log(value);
};

handler('Hello');
handler(123);

// Boolean is not accepted by either signature.
// handler(true); // ❌ not allowed