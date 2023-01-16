const inquirer = require('inquirer');
const fs = require('fs');

// Classes
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')



let teamArr = [];

//Questions
const questions = [
    {
        type: 'list',
        name: 'team',
        message: 'Which type of team memeber would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'I dont want to add any more team members'],
    }
];

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
        name: 'office-number',
        message: 'What is the team manager office number?',
    }
];


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


const intern = [
    {
        when: (answers) => answers['team'] == 'Intern',
        type: 'Input',
        name: 'name',
        message: 'What is your intern name?',

    },
    {
        when: (answers) => answers['team'] == 'Intern',
        type: 'input',
        name: 'id',
        message: 'What is your Intern id?',
    },
    {
        when: (answers) => answers['team'] == 'Intern',
        type: 'input',
        name: 'email',
        message: 'What is your Intern email?',
    },
    {
        when: (answers) => answers['team'] == 'Intern',
        type: 'input',
        name: 'school',
        message: 'What is your Intern school?',
    },
];


function init() {
    inquirer.prompt(questions).then(answers => {
        if (answers.team === 'I dont want to add any more team members') {
            console.log(teamArr);
            return;
        }
        if (answers.team === 'Manager') {
            inquirer.prompt(manager).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.office - number)
                teamArr.push(manager);
                init()
            })
        }

    })
}



















