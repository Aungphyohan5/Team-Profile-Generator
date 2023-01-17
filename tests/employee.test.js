const Employee = require("../lib/Employee")

describe("Employee", () => {

    it("should return an object", () => {
        const employee = new Employee();

        expect(typeof (employee)).toBe("object");
    })
});

// test for getName()
describe("getName", () => {

    it("should return the employees name", () => {
        const name = new Employee('John');

        expect(name.getName()).toEqual('John');
    })
});

// test for getId()
describe("getId", () => {

    it("should return employees id", () => {
        const id = new Employee('John', 1);

        expect(id.getId()).toEqual(1);
    })
});

// test for getEmail()
describe("getEmail", () => {

    it("should return the employees email", () => {
        const email = new Employee('John', 1, 'John@gmail.com');

        expect(email.getEmail()).toEqual('John@gmail.com');
    })
});

// test for getRole()
describe("getRole", () => {

    it("should return the employees role", () => {
        const role = new Employee('John', 1, 'John@gmail.com', 'Employee');

        expect(role.getRole()).toEqual('Employee');
    })
})


