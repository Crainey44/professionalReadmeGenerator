const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./generateMarkdown");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What is your favorite language?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'text message'],
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'What is the purpose of this app?',
      },
    {
        type: 'input',
        name: 'purpose',
        message: 'What is the purpose of this app?',
      },  
  ])
  .then((data) => {
    
    
    fs.writeFile("README.md", generateMarkdown(data)
    );
  });