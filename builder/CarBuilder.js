const iBuilder = require('./iBuilder');
const Car = require('./Car');

// Define private field
const _car = Symbol();

// Define specialized builder for car
class CarBuilder extends iBuilder{
  constructor() {
    super();
    this[_car] = null;
  }
  
  setSeats(seats) {
    this[_car].seats = seats;
    return this;
  }
  
  setEngine(engine) {
    this[_car].engine = engine;
    return this;
  }
  
  setTripComputer(tc) {
    this[_car].tripComputer = tc;
    return this;
  }
  
  setGPS(gps) {
    this[_car].GPS = gps;
    return this;
  }
  
  reset() {
    this[_car] = new Car();
    return this;
  }
  
  getResult() {
    const product = this[_car];
    this.reset();
    return product;
  }
}

module.exports = CarBuilder;
