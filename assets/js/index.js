// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown.js');

// AN ARRAY OF QUESTIONS FOR USER INPUT
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the TITLE of your project?: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'DESCRIPTION of your project (motivation, why you built project, what problem it solves, why you built it): ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'INSTALLATION (what are the steps required to install project): ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'USAGE (provide instructions and examples for use. Provide screenshots as necessary): ',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'CREDITS (List collaborators with GitHub links. Link github repo and deployed app): ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'LICENSE (Liceses you used for project)',
        choices: ['MIT', 'Apache', 'GPL', 'N/A']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Type your GITHUB username here: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'type your EMAIL ADDRESS here: ',
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What do you want to name this readme file?',
    }
];

// FUNCTION TO WRITE FILE
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// FUNCTION TO INITIALIZE FILE
function init() {
    inquirer.prompt(questions)
        .then((res) => {
                console.log("Your professional README file is being created!");
                writeToFile(`${res.fileName}.md`, generateMarkdown(res));
            });
}

init();
