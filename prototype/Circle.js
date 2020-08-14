const Shape = require('./Shape');

class Circle extends Shape {
  constructor(source) {
    super(source);
    this.radius = source.radius;
  }
  
  clone() {
    return new Circle(this);
  }
}

module.exports = Circle;
