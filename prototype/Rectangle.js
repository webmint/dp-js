const Shape = require('./Shape');

class Rectangle extends Shape {
  constructor(source) {
    super(source);
    this.width = source.width
    this.height = source.height
  }
  
  clone() {
    return new Rectangle(this);
  }
}

module.exports = Rectangle;
