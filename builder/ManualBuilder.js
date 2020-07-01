const iBuilder = require('./iBuilder');
const Manual = require('./Manual');

// Define private field
const _manual = Symbol();

// Define specialized builder for car manual
class ManualBuilder extends iBuilder{
  constructor() {
    super();
    this[_manual] = null;
  }
  
  setSeats(seats) {
    this[_manual].seats = seats;
    return this;
  }
  
  setEngine(engine) {
    this[_manual].engine = engine;
    return this;
  }
  
  setTripComputer(tc) {
    this[_manual].tripComputer = tc;
    return this;
  }
  
  setGPS(gps) {
    this[_manual].GPS = gps;
    return this;
  }
  
  reset() {
    this[_manual] = new Manual();
    return this;
  }
  
  getResult() {
    const product = this[_manual];
    this.reset();
    return `This is Manual for car with ${JSON.stringify(product)} `;
  }
}

module.exports = ManualBuilder;
