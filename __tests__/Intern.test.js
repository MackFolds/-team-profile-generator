const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// mock's an Employee
jest.mock('../lib/Employee');

test('create intern object ', () => {
    const intern = new Intern();

    expect(intern.name).toBe('Marin');
    expect(intern.id).toBe(789);
    expect(intern.email).toBe('email@email.net');
})

test('test intern getRole function returns Intern', () => {
    const intern = new Intern();
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})

test("get the intern's school and set to object", () => {
    const intern = new Intern();
    expect(intern.getSchool('UOfU')).toEqual(expect.any(String));
})