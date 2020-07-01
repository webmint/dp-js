// JS mimic of interface;
class iBuilder {
  
  setSeats() {
    throw new Error('You have to implement the method setSeats!');
  }
  
  setEngine() {
    throw new Error('You have to implement the method setEngine!');
  }
  
  setTripComputer() {
    throw new Error('You have to implement the method setTripComputer!');
  }
  
  setGPS() {
    throw new Error('You have to implement the method setGPS!');
  }
}

module.exports = iBuilder;
