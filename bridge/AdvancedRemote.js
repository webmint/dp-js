const Remote = require('./remote');

class AdvancedRemote extends Remote {
  mute() {
    this.device.setVolume(0)
  }
}

module.exports = AdvancedRemote;
