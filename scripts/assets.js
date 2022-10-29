/*
assets id : b${n}-p${n}-{bg, ob, so}
sound id : sound-b${n}-p${n}
marker id : marker-b${n}-p${n}
soundHandler : soundhandler${book}-${page}
*/

// constant - book 수 설정, page 수 설정 //
const assetsInit = () => {
  const bookLength = 1;
  const bookPageLength = 8;

  const sceneEl = document.querySelector("a-scene");
  const assetsEl = sceneEl.querySelector("a-assets");
  console.log(assetsEl);

  for (let bookCount = 1; bookCount <= bookLength; bookCount++) {
    for (
      let bookPageCount = 1;
      bookPageCount <= bookPageLength;
      bookPageCount++
    ) {
      const backgroundImgTag = document.createElement("img");
      const objectImgTag = document.createElement("img");
      const soundTag = document.createElement("audio");

      /* backgroundImgTag.id = `b${bookCount}-p${bookPageCount}-bg`;
      objectImgTag.id = `b${bookCount}-p${bookPageCount}-ob`;
      soundTag.id = `b${bookCount}-p${bookPageCount}-so`; */

      backgroundImgTag.id = `sa-p${bookPageCount}-bg`;
      objectImgTag.id = `sa-p${bookPageCount}-ob`;
      soundTag.id = `sa-p${bookPageCount}-so`;

      backgroundImgTag.setAttribute(
        "src",
        `./assets/book${bookCount}/page${bookPageCount}/background.png`
      );
      objectImgTag.setAttribute(
        "src",
        `./assets/book${bookCount}/page${bookPageCount}/object.png`
      );
      soundTag.setAttribute(
        "src",
        `./assets/book${bookCount}/page${bookPageCount}/sound.mp3`
      );
      soundTag.setAttribute("type", "audio/mp3");
      soundTag.setAttribute("preload", "auto");

      assetsEl.appendChild(backgroundImgTag);
      assetsEl.appendChild(objectImgTag);
      assetsEl.appendChild(soundTag);
    }
  }
};

window.onload = assetsInit;
