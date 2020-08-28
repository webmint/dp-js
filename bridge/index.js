const Tv = require('./Tv');
const Radio = require('./Radio');
const Remote = require('./Remote');
const AdvancedRemote = require('./AdvancedRemote');

const tv = new Tv();
const remote = new Remote(tv);
remote.togglePower();
console.log(tv);
remote.togglePower();
remote.volumeUp();
console.log(tv);

const radio = new Radio();
const remoteSecond = new AdvancedRemote(radio);
console.log(radio);
remoteSecond.mute();
console.log(radio);
