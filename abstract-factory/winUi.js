const IButton = require('./IButton');
const ICheckbox = require('./ICheckbox');

class WinButton extends IButton{
  paint() {
    console.log('windows button')
  }
}

class WinCheckbox extends ICheckbox{
  paint() {
    console.log('windows checkbox')
  }
}

module.exports = {
  WinButton,
  WinCheckbox,
}
