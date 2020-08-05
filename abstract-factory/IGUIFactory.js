// JS mimic of interface
class IGUIFactory {
  createButton() {
    throw new Error('You have to implement the method createButton!');
  }
  createCheckbox() {
    throw new Error('You have to implement the method createCheckbox!');
  }
}

module.exports = IGUIFactory;
