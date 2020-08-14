class Shape {
  constructor(source) {
    if (new.target === Shape) {
      throw new Error("Cannot construct Shape instances directly");
    }
    this.x = source.x;
    this.y = source.y;
    this.color = source.color;
  }
  
  clone() {
    throw new Error('You have to implement the method clone!');
  }
}

module.exports = Shape;

