export {};
/*
 * Intersection types can combine any number of compatible types.
 */

type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type Contact = {
    email: string;
};

type EmployeeProfile = Person & Employee & Contact;

const employee: EmployeeProfile = {
    name: 'John',
    age: 30,
    employeeId: 101,
    department: 'Engineering',
    email: 'john@example.com',
};

console.log(employee);