const Manager = require("../lib/Manager")

describe("Manager", () => {

    it("should return an object", () => {
        const manager = new Manager();

        expect(typeof (manager)).toEqual("object");
    })
});

// test for getOfficeNumber()
describe("getOfficeNumber", () => {

    it("should return the school name", () => {
        const name = new Manager('John', 1, 'John@gmail.com', '123');

        expect(name.getOfficeNumber()).toEqual('123');
    })
});


// test for getRole()
describe("getRole", () => {

    it("should return the employees role", () => {
        const role = new Manager('John', 1, 'John@gmail.com', '123', 'Manager');

        expect(role.getRole()).toEqual('Manager');
    })
})


