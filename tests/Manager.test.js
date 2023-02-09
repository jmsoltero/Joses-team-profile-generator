const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('should create a manager object', () => {
        const manager = new Manager('Edward',1023,'edh8sgarlic@gmail.com',27);

        expect(manager.officeNumber).toEqual(expect.any(Number));
    });
    describe('getRole', () => {
        it('should return employees role', () => {
            const manager = new Manager('Edward',1023,27);

            expect(manager.getRole()).toEqual('Manager')
        })
    })
})