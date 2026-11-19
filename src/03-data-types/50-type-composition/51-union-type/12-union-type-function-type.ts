export {};
/*
 * Union of Function Types
 */

type StringHandler = (value: string) => void;
type NumberHandler = (value: number) => void;

type UnionHandler = StringHandler | NumberHandler;

const newHandlerString: UnionHandler = (value: string) => {
    console.log(value);
}

const newHandlerNumber: UnionHandler = (value: number) => {
    console.log(value);
}

newHandlerString('Hello');
newHandlerNumber(123);


/*
 * Compare to this:
 *
 * This function accepts both string and number.
 * It is compatible with both StringHandler and NumberHandler,
 * so the assignment is valid.
 *
 * However, when calling it through the UnionHandler type,
 * TypeScript cannot determine which function signature applies.
 */
const newHandler: UnionHandler = (value: number | string) => {
    console.log(value);
}

/*
 * Argument of type "Hello" is not assignable to parameter of type never
 */
// newHandler('Hello'); // ❌ not allowed