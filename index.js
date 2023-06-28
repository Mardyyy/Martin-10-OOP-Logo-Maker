const inquirer = require('inquirer');
const {Square, Circle, Triangle} = require('./lib/shapes.js');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What should the text color to be?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What should the shape be?',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What should the shapes color be?',
        },
    ])
    .then(({ text, textColor, shape, shapeColor }) => {

        switch (shape) {
            case "Square":
                shape = new Square();
                break;
            case "Circle":
                shape = new Circle();
                break;
            case "Triangle":
                shape = new Triangle();
        }

        shape.setColor(shapeColor);

        var svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

        fs.writeFile('examples/logo.svg', svg, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    });
