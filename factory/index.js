const WindowsDialog = require('./WindowsDialog');
const WebDialog = require('./WebDialog');

// config for Application. OS = Web or Windows
const cnfg = {
  OS: 'Web'
};

class Application {
  constructor() {
    this.dialog = null;
  }
  
  // Init of dialog type based on config OS
  initialize() {
    const config = cnfg;
    if (config.OS === 'Windows') {
      this.dialog = new WindowsDialog()
    } else if (config.OS === 'Web') {
      this.dialog = new WebDialog()
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
