// JS mimic of interface
class IButton {
  paint() {
    throw new Error('You have to implement the method paint!');
  }
}

module.exports = IButton;
