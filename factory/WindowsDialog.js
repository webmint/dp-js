const Dialog = require('./Dialog');
const WindowsButton = require('./WindowsButton');

// Specific Factory for Windows
class WindowsDialog extends Dialog{
  // Implementation of abstract method from Dialog. Required
  createButton() {
    return new WindowsButton();
  }
}

module.exports = WindowsDialog;
