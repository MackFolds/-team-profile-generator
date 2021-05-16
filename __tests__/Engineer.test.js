const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// mock's an Employee
jest.mock('../lib/Employee');

test('tests engineer object creation', () => {
    const engineer = new Engineer()

    expect(engineer.name).toBe('Mack');
    expect(engineer.id).toBe(321);
    expect(engineer.email).toBe('email@email.net');
})

test("get engineer's role", () => {
    const engineer = new Engineer();
    engineer.getRole()
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("get engineer's github", () => {
    const engineer = new Engineer();

    expect(engineer.getGitHub('github.com/repo-name')).toEqual(expect.any(String));
})