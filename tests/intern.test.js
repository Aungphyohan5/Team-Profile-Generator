const Intern = require("../lib/Intern")

describe("Intern", () => {

    it("should return an object", () => {
        const intern = new Intern();

        expect(typeof (intern)).toEqual("object");
    })
});

// test for getSchool()
describe("getSchool", () => {

    it("should return the school name", () => {
        const name = new Intern('John', 1, 'John@gmail.com', 'UNB');

        expect(name.getSchool()).toEqual('UNB');
    })
});


// test for getRole()
describe("getRole", () => {

    it("should return the employees role", () => {
        const role = new Intern('John', 1, 'John@gmail.com', 'UNB', 'Intern');

        expect(role.getRole()).toEqual('Intern');
    })
})


