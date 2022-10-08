let backgroundEl = document.getElementsByClassName("background");
let characterEl = document.getElementsByClassName("character");

for (let i = 0; i < characterEl.length; i++) {
  characterEl[i].setAttribute(animation__001, {
    property: rotate,
    from: { x: -90, y: 0, z: -20 },
    to: { x: -90, y: 0, z: 20 },
    dir: "alternate",
    dur: 1000,
    easing: "easeInOutQuad",
    startEvents: "start-animation-rotate",
  });
  characterEl[i].emit(`start-animation-rotate`, null, false);
}
