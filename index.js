const inquirer = require("inquirer");
const fs = require('fs');

function runApp() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your first and last name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is your favorite hobby?',
            name: 'hobby',
        },
        {
            type: 'input',
            message: 'What is your favorite food?',
            name: 'food',
        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            name: 'languages',
            choices: ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'],
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github',
        }
    ])
    .then((data) => {
        const fileName = 'index.html';
        writeToFile(fileName, JSON.stringify(data));
    }
    );
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, indexStructure(JSON.parse(data)), (err) => err ? console.error(err) : console.log("Successfully generated index.html file!"));
}

var indexStructure = function (data) {
    const languages = data.languages;
    const listLang = languages.join(", ");
   return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Portfolio</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">${data.name}</h1>
              <p class="lead">I am from ${data.location}.<br><br>My favorite food is ${data.food}.<br><br>My favorite hobby is ${data.hobby}.<br><br>I know the following programming languages: ${listLang}.</p>
            </div>
          </div>
    
          <div class="card bg-primary">
            <div class="card-body text-white">
              <h2>Contact Me:</h2>
              <ul>
                <li>LinkedIn: ${data.linkedin}</li>
                <li>GitHub: ${data.github}</li>
              </ul>
            </div>
          </div>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
    </body>
    </html>`
}

runApp();