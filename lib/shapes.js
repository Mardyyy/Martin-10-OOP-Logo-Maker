class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color){
        this.color = color;
    }
}

class Square extends Shape {
    render() { return `<rect width="200" height="200" style="fill: ${this.color}"/>` }
}

class Circle extends Shape {
    render() { return `<circle cx="150" cy="100" r="80" style="fill: ${this.color}"/>`}
}

class Triangle extends Shape {
    render() { return `<polygon points="200,10 250,190 160,210" style="fill: ${this.color}"/>`}
} 



module.exports = {Square, Circle, Triangle};
