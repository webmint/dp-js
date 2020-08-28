// JS mimic of interface
class IDevice {
  constructor() {
    this.enabled = false;
    this.volume = 50;
    this.channel = 0;
  }
  isEnabled() {
    throw new Error('You have to implement the isEnabled!');
  }
  enable() {
    throw new Error('You have to implement the enable!');
  }
  disable() {
    throw new Error('You have to implement the disable!');
  }
  getVolume() {
    throw new Error('You have to implement the getVolume!');
  }
  setVolume() {
    throw new Error('You have to implement the setVolume!');
  }
  getChannel() {
    throw new Error('You have to implement the getChannel!');
  }
  setChannel() {
    throw new Error('You have to implement the setChannel!');
  }
}

module.exports = IDevice;
