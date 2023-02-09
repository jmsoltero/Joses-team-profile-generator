const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('creates an employee object', () => {
        const employee = new Employee('Greg',1027,'gregy27@gmail.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
    describe('getName', () => {
        it('should return name', () => {
            const employee = new Employee('Greg',25,'gregy27@gmail.com');

            expect(employee.getName()).toEqual(expect.any(String))
        })
    })
    describe('getEmail', () => {
        it('should return email', () => {
            const employee = new Employee('Greg',25,'gregy27@gmail.com');

            expect(employee.getEmail()).toEqual(expect.any(String));

        })
    })
    describe('getRole', () => {
        it('should return role of employee', () => {
            const employee = new Employee('Greg',25,'gregy27@gmail.com');
  
            expect(employee.getRole()).toEqual('Employee')
        })
    })
})