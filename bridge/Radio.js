const IDevice = require('./IDevice');

class Radio extends IDevice {
  constructor() {
    super();
    this.waves = 'waves';
  }
  
  isEnabled() {
    return this.enabled;
  }
  enable() {
    this.enabled = true;
  }
  disable() {
    this.enabled = false;
  }
  getVolume() {
    return this.volume;
  }
  setVolume(percent) {
    this.volume = percent;
  }
  getChannel() {
    return this.channel;
  }
  setChannel(channel) {
    this.channel = channel;
  }
}

module.exports = Radio;
