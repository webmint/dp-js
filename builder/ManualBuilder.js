const Builder = require('./Builder');
const Manual = require('./Manual');

// Define specialized builder for car manual
// For simplicity it extends Builder fully, but it can have own methods which suitable for it
class ManualBuilder extends Builder{
  constructor(item) {
    super(item);
  }
  
  reset() {
    this.item = new Manual();
    return this;
  }
  
  getResult() {
    const product = this.item;
    this.reset();
    return `This is Manual for car with ${JSON.stringify(product)} `;
  }
}

module.exports = ManualBuilder;
