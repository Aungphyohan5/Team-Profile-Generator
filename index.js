const inquirer = require('inquirer');
const fs = require('fs');

// Classes
// const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const generateHtml = require('./src/generateHtml')

let teamArr = [];

//Questions
const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'Which type of team memeber would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'I dont want to add any more team members'],
    }
];
// manager questions
const manager = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team manager id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager office number?',
    }
];

//engineer questions
const engineer = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Engineer name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer email?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the engineer gitHub?',
    },

];

// intern questions
const intern = [
    {

        type: 'Input',
        name: 'name',
        message: 'What is your intern name?',

    },
    {

        type: 'input',
        name: 'id',
        message: 'What is your Intern id?',
    },
    {

        type: 'input',
        name: 'email',
        message: 'What is your Intern email?',
    },
    {

        type: 'input',
        name: 'school',
        message: 'What is your Intern school?',
    },
];

//init function for user prompt
function init() {
    inquirer.prompt(questions).then(answers => {
        if (answers.role === 'I dont want to add any more team members') {
            console.log(teamArr);
            writeToFile();
            return;
        }
        if (answers.role === 'Manager') {
            inquirer.prompt(manager).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                teamArr.push(manager);
                init()
            })
        };

        if (answers.role === 'Engineer') {
            inquirer.prompt(engineer).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
                teamArr.push(engineer);
                init()
            })
        };

        if (answers.role === 'Intern') {
            inquirer.prompt(intern).then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                teamArr.push(intern);
                init()
            })
        };

    })
}


init()



//Generate HTML
function writeToFile() {
    fs.writeFile('./dist/generatedTeam.html', generateHtml(teamArr), function (err) {
        if (err) throw err;
        console.log("Successfully created team")
    })

}













