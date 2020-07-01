const WindowsDialog = require('./WindowsDialog');
const WebDialog = require('./WebDialog');

// config for Application. OS = web or windows
const cnfg = {
  OS: 'web'
};

const factories = {
  windows: WindowsDialog,
  web: WebDialog,
};

class Application {
  constructor() {
    this.dialog = null;
  }
  
  // Init of dialog type based on config OS.
  // Differs from book because in book example you have to wright all cases.
  // Done for better optimisation.
  initialize() {
    if (Object.prototype.hasOwnProperty.call(factories, cnfg.OS)) {
      this.dialog = new factories[cnfg.OS]();
    } else {
      throw new Error('Error! Unknown operating system.')
    }
  }
  
  main() {
    this.initialize();
    this.dialog.render()
  }
}

const app = new Application();
app.main();
