const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create an intern object', () => {
        const intern = new Intern('Pancho',1776,'pvilla27@gmail.com','UTD');

        expect(intern.school).toEqual(expect.any(String))
    });
    describe('getSchool', () => {
        it('should return a school name', () => {
            const intern = new Intern('Pancho',1776,'pvilla27@gmail.com','UTD');

            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
        });
    });
    describe('getRole', () => {
        it('should return role of employee', () => {
            const intern = new Intern('Pancho',1776,'pvilla27@gmail.com','UTD');

            expect(intern.getRole()).toEqual('Intern')
        });
    });
});