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
      to: "6 6 5",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// animation-scale-updown //
AFRAME.registerComponent("animation-scale-updown", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      to: "5 6 5",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// animation-scale-side //
AFRAME.registerComponent("animation-scale-side", {
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

// animation-rotation //
AFRAME.registerComponent("animation-rotation", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 0",
      to: "0 0 360",
      dur: "1000",
      loop: "true",
      easing: "linear",
    });
  },
});

// animation-rotation-y //
AFRAME.registerComponent("animation-rotation-y", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 -10 0",
      to: "0 10 0",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// animation-rotation-z //
AFRAME.registerComponent("animation-rotation-z", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 -20",
      to: "0 0 20",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});
