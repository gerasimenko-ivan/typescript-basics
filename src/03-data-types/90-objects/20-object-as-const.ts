export {};
/*
 * Object As Const
 *
 * Use 'as const' when the value and the properties should not be changed.
 */

const config1 = {
    timeout: 1000,
    path: 'C:\\user\\docs.csv',
    needPassword: false,
};

console.log(config1);

// Variable reassignment is not allowed:
// config1 = { timeout: 50, path: 'C:\\user\\docs.csv', needPassword: true };

// Property reassignment is allowed:
config1.timeout = 50;
config1.path = 'D:\\Docs\\data.csv';
config1.needPassword = true;

console.log(config1);

const config2 = {
    timeout: 35000,
    version: '1.0.0',
    needPassword: false,
} as const;

// Properties are readonly, so reassignment is not allowed:
// config2.timeout = 50;

console.log(config2);