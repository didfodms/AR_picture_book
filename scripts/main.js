/*
assets id : b${n}-p${n}-{bg, ob, so}
sound id : sound-b${n}-p${n}
marker id : marker-b${n}-p${n}
soundHandler : soundhandler${book}-${page}
*/
// constant - book 수 설정, page 수 설정 //
const bookLength = 1;
const bookPageLength = 3;

// element //
const sceneEl = document.querySelector("a-scene");
console.log(sceneEl);

// create element //
let barcodeValue = 8;
for (let bookCount = 1; bookCount <= bookLength; bookCount++) {
  for (
    let bookPageCount = 1;
    bookPageCount <= bookPageLength;
    bookPageCount++
  ) {
    // marker element create code
    const marker = document.createElement("a-marker");
    marker.id = `marker-b${bookCount}-p${bookPageCount}`;
    marker.setAttribute("type", "barcode");
    marker.setAttribute("value", `${barcodeValue++}`);

    // sound element create code
    const sound = document.createElement("a-sound");
    sound.setAttribute("src");
  }
}
