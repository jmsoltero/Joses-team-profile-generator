const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    it('should crrate an engineer object', () => {
        const engineer = new Engineer('Tom',3456,'tomh8sjerry@gmail.com','tomthejom');

        expect(engineer.gitUser).toEqual(expect.any(String))
    })
    describe('getGitUser', () => {
        it('should return github username', () => {
            const engineer = new Engineer('Tom',3456,'tomh8sjerry@gmail.com','tomthejom');

            expect(engineer.getGitUser()).toEqual(expect.stringContaining(engineer.gitUser.toString()))
        });
    });
    describe('getRole', () => {
        it('should return engineers role', () => {
            const engineer = new Engineer('Tom',3456,'tomh8sjerry@gmail.com','tomthejom');

            expect(engineer.getRole()).toEqual('Engineer')
        });
    });
});

