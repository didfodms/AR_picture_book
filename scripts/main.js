/*
assets id : b${n}-p${n}-{bg, ob, so}
sound id : sound-b${n}-p${n}
marker id : marker-b${n}-p${n}
soundHandler : soundhandler${book}-${page}
*/
// constant //
const bookLength = 1;
const bookPageLength = 3;

// element //
const sceneEl = document.querySelector("a-scene");

// create element //
for (let bookCount = 1; bookCount <= bookLength; bookCount++) {
  for (
    let bookPageCount = 1;
    bookPageCount <= bookPageLength;
    bookPageCount++
  ) {
    // marker element create code
    const marker = document.createElement("a-marker");
    marker.id = `marker-b${bookCount}-p${bookPageCount}`;
    marker.setAttribute("src", {});
  }
}
