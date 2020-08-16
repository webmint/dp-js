class RoundPeg {
  constructor(radius) {
    this.radius = radius;
  }
  
  getRadius() {
    return this.radius;
  }
}

class SquarePeg {
  constructor(width) {
    this.width = width;
  }
  
  getWidth() {
    return this.width;
  }
}

module.exports = {
  RoundPeg,
  SquarePeg,
}
