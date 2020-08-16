const RoundHole = require('./RoundHole');
const pegs = require('./pegs');
const SquarePegAdapter = require('./SquarePegAdapter');

const hole = new RoundHole(5);
const rpeg = new pegs.RoundPeg(5);
hole.fits(rpeg); // TRUE

const small_sqpeg = new pegs.SquarePeg(5);
const large_sqpeg = new pegs.SquarePeg(10);
// hole.fits(small_sqpeg) will not work cause has no method radius.
// Originally it wont work due to different types, but JS is weak typed language

const small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg);
const large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg);
hole.fits(small_sqpeg_adapter); // TRUE
hole.fits(large_sqpeg_adapter); // FALSE
