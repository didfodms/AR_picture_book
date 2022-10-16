AFRAME.registerComponent("soundhandler1-1", {
  tick: function () {
    var entity = document.querySelector("#sound-1-1");
    if (document.querySelector("#marker-1-1").object3D.visible == true) {
      entity.components.sound.playSound();
    } else {
      //entity.components.sound.pauseSound();
      entity.components.sound.stopSound();
    }
  },
});
