// soundhandler must be imported in a-sound tag
AFRAME.registerComponent("soundhandler", {
  init: function () {
    this.entity = this.el;
    this.markerEl = this.entity.parentNode;
  },

  tick: function () {
    if (this.markerEl.object3D.visible == true) {
      this.entity.components.sound.playSound();
    } else {
      this.entity.components.sound.stopSound();
    }
  },
});
