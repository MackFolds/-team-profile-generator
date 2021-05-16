const Employee = require('../lib/employee.js');

Test('creates employee object ', () => {
    const employee = new Employee('Alex', 123, 'email@email.net', 'Employee');

    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe(123);
    expect(employee.email).toBe('email@email.net')
})

test('get employee name', () =>{
    const employee = new Employee('Alex', 123, 'email@email.net', 'Employee');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
})

test('get employee id', () =>{
    const employee = new Employee('Alex', 123, 'email@email.net', 'Employee');
    
    expect(employee.getid()).toEqual(expect.any(Number));
})

test('get employee email', () =>{
    const employee = new Employee('Alex', 123, 'email@email.net', 'Employee');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
})

test("get employee's role", () =>{
    const employee = new Employee('David', 117, 'email@email.com', 'Employee');

    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role));
})