const CarBuilder = require('./CarBuilder');
const Director = require('./Director');
const ManualBuilder = require('./ManualBuilder');

// Car creation. Arg - is director method name
function makeCar(constructType) {
  const director = new Director();
  // creating a car
  const carBuilder = new CarBuilder();
  director[constructType](carBuilder);
  // creating manual for car
  const manualBuilder = new ManualBuilder();
  director[constructType](manualBuilder);

  return {
    car: carBuilder.getResult(),
    manual: manualBuilder.getResult(),
  }
}

console.log(makeCar('constructSportsCar'));
console.log(makeCar('constructCityCar'));
