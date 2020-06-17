// Define common methods for specialized builders
class Builder {
  constructor() {
    this.item = null;
  }
  
  setSeats(seats) {
    this.item.seats = seats;
    return this;
  }
  
  setEngine(engine) {
    this.item.engine = engine;
    return this;
  }
  
  setTripComputer(tc) {
    this.item.tripComputer = tc;
    return this;
  }
  
  setGPS(gps) {
    this.item.GPS = gps;
    return this;
  }
}

module.exports = Builder;
