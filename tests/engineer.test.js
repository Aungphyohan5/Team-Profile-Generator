const Engineer = require("../lib/Engineer")

describe("Engineer", () => {

    it("should return an object", () => {
        const engineer = new Engineer();

        expect(typeof (engineer)).toEqual("object");
    })
});

// test for getGitHub()
describe("getGitHub", () => {

    it("should return the GitHub username", () => {
        const name = new Engineer('John', 1, 'John@gmail.com', 'John008');

        expect(name.getGitHub()).toEqual('John008');
    })
});


// test for getRole()
describe("getRole", () => {

    it("should return the employees role", () => {
        const role = new Engineer('John', 1, 'John@gmail.com', 'John008', 'Engineer');

        expect(role.getRole()).toEqual('Engineer');
    })
})


