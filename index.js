const inquirer = require('inquirer')
const fs = require('fs')

//Helper functions
const generateLogo = require('./lib/generate')
const shapes = require('./lib/shapes')

// Question Array
const questions = [
    {
        type: 'input',
        name: 'text',
        message:'Text for your logo. (3 characters, Max)',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Color for your logo text. (Color Keyword or Hexcode)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Shape for your logo.',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        name: 'background',
        message: 'Background color for your logo. (Color Keyword or Hexcode)'
    },
]

// Create .svg file
function writeToFile(data) {
    let fileName = './examples/logo.svg';
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    })
}

// Initialization function
const init = () => {
    inquirer
    .prompt(questions)
    .then((answers) => writeToFile(generateLogo(answers)))
    .catch((err) => console.log(err))
}

init()