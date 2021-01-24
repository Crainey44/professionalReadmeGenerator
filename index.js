const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./generateMarkdown");

// fs.open("README.md", fd => {
//     fs.write(fd, "garbage")
    
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What is your preferred language?',
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
        name: 'label',
        message: 'What is the name of this project?',
      },
    {
        type: 'input',
        name: 'purpose',
        message: 'What is the purpose of this project?',
      },  
  ])
  .then((data) => {
    console.log (data)
    const x = generateMarkdown(data)
    console.log(x)
    fs.writeFileSync("README.md", x)
  })
  .catch(error => { // (**)
    console.error(error)
    // alert(`The unknown error has occurred: ${error}`);
    // don’t return anything => execution goes the normal way
  });