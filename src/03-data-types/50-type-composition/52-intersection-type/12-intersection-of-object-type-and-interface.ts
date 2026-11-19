export {};
/*
 * Intersection of Object Types and Interfaces
 *
 * Interfaces and object types can be combined using the intersection
 * operator (&) to create a type that includes all their members.
 */

interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type Contact = {
    email: string;
}

// Two interfaces and one object type are combined below:
type EmployeeProfile = Person & Employee & Contact;

const employee: EmployeeProfile = {
    name: 'John',
    employeeId: 101,
    email: 'john@example.com',
};

console.log(employee);