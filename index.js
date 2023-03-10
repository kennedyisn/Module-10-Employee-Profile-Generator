// Packages needed to run application
const inquirer = require('inquirer');
//require this to read and write my ReadME file
const fs = require('fs');
const Manager = require('.lib/Manager');
const Engineer = require('.lib/Engineer');
const Intern = require('.lib/Intern');

// User input to create Employee profile
const baseEmployeeQuestions = [
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
    
    {
      type: "list",
      message: "Select how you would like to proceed.",
      name: "choice",
      choices: ['create new engineer profile', 'create new intern profile', 'finish building team'],
      validate: (value) => { if(value){return true} else {return 'Please select an option to continue. If your project has no license select the N/A option.'}}
    },
];

const engineerQuestions = [
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
]
const internQuestions = [
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
];