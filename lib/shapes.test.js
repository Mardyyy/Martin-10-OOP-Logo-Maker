const {Square, Circle, Triangle} = require('./shapes')

describe('Square', () => {
    test('Shape is a square and blue', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect width="200" height="200" style="fill: blue"/>`);
    })
})

describe('Circle', () => {
    test('Shape is a circle and blue', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" style="fill: blue"/>`);
    })
})

describe('Triangle', () => {
    test('Shape is a triangle and blue', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="200,10 250,190 160,210" style="fill: blue"/>`);
    })
})
