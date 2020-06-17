const Dialog = require('./Dialog');
const HTMLButton = require('./HTMLButton');

// Specific Factory for Web
class WebDialog extends Dialog{
  // Implementation of abstract method from Dialog. Required
  createButton() {
    return new HTMLButton();
  }
}

module.exports = WebDialog;
