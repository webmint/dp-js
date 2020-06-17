// JS mimic of interface;
class IButton {
  render() {
    throw new Error('You have to implement the method render!');
  }
  onClick() {
    throw new Error('You have to implement the method onClick!');
  }
}

module.exports = IButton;
