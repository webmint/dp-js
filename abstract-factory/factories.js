const IGUIFactory = require('./IGUIFactory');
const winUi = require('./winUi');
const macUi = require('./macUi');

class WinFactory extends IGUIFactory{
  createButton() {
    return new winUi.WinButton();
  }
  createCheckbox() {
    return new winUi.WinCheckbox();
  }
}

class MacFactory extends IGUIFactory{
  createButton() {
    return new macUi.MacButton();
  }
  createCheckbox() {
    return new macUi.MacCheckbox();
  }
}

module.exports = {
  WinFactory,
  MacFactory,
}
