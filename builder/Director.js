// Setting up Director class to build cars and also manuals
class Director {
  constructSportsCar(builder) {
    builder.reset()
      .setSeats(2)
      .setEngine('Sport')
      .setTripComputer(true)
      .setGPS(true);
  }
  
  constructCityCar(builder) {
    builder.reset()
      .setSeats(4)
      .setEngine('City')
      .setGPS(true);
  }
}

module.exports = Director;
