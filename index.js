const inquirer = require('inquirer');
const fs = require('fs');

//Questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Manager-name',
            message: 'What is the team manager name?',
        },
        {
            type: 'input',
            name: 'Manager-id',
            message: 'What is the team manager id?',
        },
        {
            type: 'input',
            name: 'manager-email',
            message: 'What is the team manager email?',
        },
        {
            type: 'input',
            name: 'manager-office-number',
            message: 'What is the team manager office number?',
        },
        {
            type: 'list',
            name: 'team',
            message: 'Which type of team memeber would you like to add?',
            choices: ['Engineer', 'Intern', 'I dont want to add any more team members'],
        },
        {
            when: (answers) => answers['team'] == 'Intern',
            type: 'Input',
            name: 'Intern-name',
            message: 'What is your intern name?',

        },
        {
            when: (answers) => answers['team'] == 'Intern',
            type: 'input',
            name: 'Intern-id',
            message: 'What is your Intern id?',
        },
        {
            when: (answers) => answers['team'] == 'Intern',
            type: 'input',
            name: 'Intern-email',
            message: 'What is your Intern email?',
        },
        {
            when: (answers) => answers['team'] == 'Intern',
            type: 'input',
            name: 'Intern-school',
            message: 'What is your Intern school?',
        },
        {
            when: (answers) => answers['team'] == 'Engineer',
            type: 'input',
            name: 'Engineer-name',
            message: 'What is your Engineer name?',
        },
    ])
}

promptUser()
    .then(answers => {
        console.log(answers)
    });