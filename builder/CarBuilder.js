const Builder = require('./Builder');
const Car = require('./Car');

// Define specialized builder for car
class CarBuilder extends Builder{
  constructor(item) {
    super(item);
  }
  
  reset() {
    this.item = new Car();
    return this;
  }
  
  getResult() {
    const product = this.item;
    this.reset();
    return product;
  }
}

module.exports = CarBuilder;
