// Packages needed to run application
const inquirer = require('inquirer');
//require this to read and write my ReadME file
const fs = require('fs');
const Manager = require('.lib/Manager');
const Engineer = require('.lib/Engineer');
const Intern = require('.lib/Intern');

//using init to start first function


// User input to create Manager profile
function managerCreator() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of your team manager?',
      name: 'name',
      validate: (value) => { if(value){return true} else {return 'Please enter the name of your team manager.'}}
    },

    {
      type: 'input',
      message: 'Enter the employee ID number for your team manager.',
      name: 'id',
      validate: (value) => { if(value){return true} else {return 'Please enter the employee ID number of your team manager.'}}
    },

    {
      type: 'input',
      message: 'Enter the email address for your team manager.',
      name: 'email',
      validate: (value) => { if(value){return true} else {return 'Please enter the email address of your team manager to continue.'}}
    },

    {
      type: 'input',
      message: 'What is the office number for your team manager?',
      name: 'officeNumber',
      validate: (value) => {if(value){return true} else {return 'Please enter the office number of your team manager to continue.'}}
    },
  ])
  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    employees.push(manager);
    console.log("Team: ", employees)
    teamCreator()
  });
}

// User input to create the rest of the profiles
function teamCreator() {
  inquirer.prompt([ 
  {
    type: "list",
    message: "Select how you would like to proceed.",
    name: "choice",
    choices: ['Create new engineer profile', 'Create new intern profile', 'Finish building team'],
    validate: (value) => { if(value){return true} else {return 'Please select an option to continue.'}}
  },
  ])
  .then((answer) => {
    if (answer.choice === 'Create new engineer profile') { 
      return inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of this engineer?',
        name: 'name',
        validate: (value) => { if(value){return true} else {return 'Please enter the name of this engineer.'}}
      },

      {
        type: 'input',
        message: 'Enter the employee ID number for this engineer.',
        name: 'id',
        validate: (value) => { if(value){return true} else {return 'Please enter the employee ID number of this engineer.'}}
      },  

      {
        type: 'input',
        message: 'Enter the email address for this engineer.',
        name: 'email',
        validate: (value) => { if(value){return true} else {return 'Please enter the email address of this engineer to continue.'}}
      },  

      {
        type: 'input',
        message: 'What is the github username for this engineer?',
        name: 'github',
        validate: (value) => {if(value){return true} else {return 'Please enter the github username for this engineer to complete their profile.'}}
      },
      ])
      .then((data) => {
      const engineer = new Engineer(data.name, data.id, data.email, data.github);
      employees.push(engineer);
      console.log("Team: ", employees)
      teamCreator()
    })
  } else if (answer.choice === 'Create new intern profile') {
    return inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of this intern?',
        name: 'name',
        validate: (value) => { if(value){return true} else {return 'Please enter the name of this intern.'}}
      },

      {
        type: 'input',
        message: 'Enter the employee ID number for this intern.',
        name: 'id',
        validate: (value) => { if(value){return true} else {return 'Please enter the employee ID number of this intern.'}}
      },

      {
        type: 'input',
        message: 'Enter the email address for this intern.',
        name: 'email',
        validate: (value) => { if(value){return true} else {return 'Please enter the email address of this intern to continue.'}}
      },

      {
        type: 'input',
        message: 'What is the school attended this intern?',
        name: 'school',
        validate: (value) => {if(value){return true} else {return 'Please enter the school attended by this intern to complete their profile.'}}
      },
    ])
        .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        console.log("Team: ", employees)
        teamCreator()
      });
  } else if (answer.choice === 'Finish building team') {
    // save all data
    
    // push input to HTML generator
  }
})
}

init();