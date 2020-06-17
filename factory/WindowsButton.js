const IButton = require('./IButton');

class WindowsButton extends IButton {
  // Implementation of method from interface
  render(text) {
    return `win-button>${text || 'Ok'}<win-button`;
  }
  // Implementation of method from interface
  onClick(functionName) {
    return functionName;
  }
}

module.exports = WindowsButton;
