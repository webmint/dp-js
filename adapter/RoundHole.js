class RoundHole {
  constructor(radius) {
    this.radius = radius;
  }
  
  getRadius() {
    return this.radius;
  }
  
  fits(peg) {
    return this.getRadius() >= peg.getRadius();
  }
}

module.exports = RoundHole;
