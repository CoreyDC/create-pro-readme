// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['What is the TITLE of your project?: ', 'DESCRIPTION of your project (motivation, why you built project, what problem it solves, why you built it): ', 'INSTALLATION (what are the steps required to install project): ', 'USAGE (provide instructions and examples for use. Provide screenshots as necessary): ', 'CREDITS (List collaborators with GitHub links. Link github repo and deployed app): ', 'LICENSE (Liceses you used for project)', 'Link your GITHUB here: ', 'type your EMAIL ADDRESS here: '];

// USER INPUTS FOR README FILE
inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'Description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'Installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'Usage',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'Credits',
            message: questions[4],
        },
        {
            type: 'list',
            name: 'License',
            message: questions[5],
            choices: ['MIT', 'Apache', 'GNU']
        },
        {
            type: 'input',
            name: 'Contact GitHub',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'Contact Email',
            message: questions[7],
        }
    ]); 

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
