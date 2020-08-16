const pegs = require('./pegs');

class SquarePegAdapter extends pegs.RoundPeg {
  constructor(peg) {
    super();
    this.peg = peg;
  }
  
  getRadius() {
    return this.peg.getWidth() * Math.sqrt(2) / 2;
  }
}

module.exports = SquarePegAdapter;
