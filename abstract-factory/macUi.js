const IButton = require('./IButton');
const ICheckbox = require('./ICheckbox');

class MacButton extends IButton{
  paint() {
    console.log('Mac button')
  }
}

class MacCheckbox extends ICheckbox{
  paint() {
    console.log('Mac checkbox')
  }
}

module.exports = {
  MacButton,
  MacCheckbox,
}
