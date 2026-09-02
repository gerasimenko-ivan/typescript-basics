export {}
/*
 * Initialization and Assignment difference
 *
 * initialization -- giving a variable its initial value (first assignment)
 * assignment -- giving a variable a value
 *
 * Therefore, initialization is also an assignment,
 * but specifically the first assignment.
 */

let variable1: number = 25;  // declaration + initialization
variable1 = 30;              // (re)assignment

let variable2: number;  // declaration
variable2 = 30;         // initialization (first assignment)

let variable3: number;  // declaration
variable3 = 30;         // initialization (first assignment)
variable3 = 40;         // (re)assignment