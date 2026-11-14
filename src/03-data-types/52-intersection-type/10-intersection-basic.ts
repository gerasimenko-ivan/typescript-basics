export {};
/*
 * Intersection Types
 *
 * An intersection type combines multiple types into one.
 * The resulting type must satisfy all properties
 * of every intersected type.
 */

type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type EmployeePerson = Person & Employee;

/*
 * ❌ not allowed
 * Property employeeId is missing
 */
// const employee: EmployeePerson = {
//     name: 'John',
// };

const employee: EmployeePerson = {
    name: 'John',
    employeeId: 101,
};

console.log(employee);