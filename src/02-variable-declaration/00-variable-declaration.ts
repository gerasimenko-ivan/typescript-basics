/*
 * Variable declaration
 */

// General form:
let variableName: string = "Variable value"; // declaration + initialization

/* Declaration above contains:
 *  - let (or const)
 *   └── declaration keyword, determines whether a variable allows reassignment (loosely speaking)
 *  - variable name (identifier)
 *   └── the way you name variable. Check src/02-variable-declaration/20-naming.ts for more information
 *  - : string
 *   └── type annotation. Check src/03-data-types for more information
 *  - = "Variable value"
 *   └── initialization, giving the variable its initial value
 */

// some other possible declaration options:
let variableName2: string; // declaration, type setting, NO initialization

let variableName3; // declaration, no type set explicitly, NO initialization
                   // but TS inferred ': any' type

let variableName4 = "Variable value"; // declaration, NO type set explicitly, initialization
                                             // inferred type by the type of assigned value