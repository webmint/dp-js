// General Dialog Factory
class Dialog {
  constructor() {
    this.okButton = null;
  }
  
  render() {
    this.okButton = this.createButton();
    this.okButton.onClick('closeDialog');
    this.okButton.render('Click');
  }
  
  // JS mimic of abstract method
  createButton() {
    throw new Error('You have to implement the method createButton!');
  }
}

module.exports = Dialog;
