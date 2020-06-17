const IButton = require('./IButton');

class HTMLButton extends IButton {
  // Implementation of method from interface
  render(text) {
    return `button>${text || 'Ok'}<button`;
  }
  // Implementation of method from interface
  onClick(functionName) {
    return functionName;
  }
}

module.exports = HTMLButton;
