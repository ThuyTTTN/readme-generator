// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide the title of your project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of your project');
                return false;
            }
        }    
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide usage information');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select licenses (check all that apply)',
        choices: [' MIT',' GNU', ' BSD', ' none']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List name(s) of all who contributed'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide test instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email for questions',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email');
                return false;
            }
        }   
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username.',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter the GitHub username');
                return false;
            }
        }   
    }          

]
   



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

inquirer.prompt(questions)
.then(answers => {
    fs.writeFile('README.md', generateMd(answers), (err) => {
        //if there is any error in writing to the file, return
        if (err) {
            console.error(err)
            return;
        }
    })
})


// TODO: Create a function to initialize app
function init() {
  
}


// Function call to initialize app
init();
