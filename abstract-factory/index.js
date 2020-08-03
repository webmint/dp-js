const factories = require('./factories');

class Application {
  constructor(factory) {
    this.factory = factory;
    this.button = null;
    this.checkbox = null;
  }
  
  createUi() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }
  
  paint() {
    this.button.paint();
    this.checkbox.paint();
  }
}

const cnfg = {
  OS: 'Windows'
};

let factory;

if (cnfg.OS === 'Windows') {
  factory = new factories.WinFactory()
} else if (cnfg.OS === 'Mac') {
  factory = new factories.MacFactory()
} else {
  throw new Error('Error! Unknown operating system.')
}

const app = new Application(factory);
app.createUi();
app.paint();
