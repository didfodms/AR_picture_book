// animation-jump //
AFRAME.registerComponent("animation-jump", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__jump", {
      property: "position",
      to: "0 5 0.5",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// animation-scale //
AFRAME.registerComponent("animation-scale", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      to: "6 5 5",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// animation-rotation-y //
AFRAME.registerComponent("animation-rotation-y", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 -20 0",
      to: "0 20 0",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "linear",
    });
  },
});

// animation-rotation-z //
AFRAME.registerComponent("animation-rotation-z", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "-20 0 0",
      to: "20 0 0",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "linear",
    });
  },
});
