const bookLength = 8;
const bookPageLength = 8;

let result = "";

for (let bookCount = 1; bookCount <= bookLength; bookCount++) {
  for (
    let bookPageCount = 1;
    bookPageCount <= bookPageLength;
    bookPageCount++
  ) {
    // assets.js
    let backgroundImgTag = `<img id="b${bookCount}-p${bookPageCount}-bg" src="./assets/book${bookCount}/page${bookPageCount}/background.png" />\n`;
    let objectImgTag = `<img id="b${bookCount}-p${bookPageCount}-ob" src="./assets/book${bookCount}/page${bookPageCount}/object.png" />\n`;
    let audioTag = `<audio id="b${bookCount}-p${bookPageCount}-so" src="./assets/book${bookCount}/page${bookPageCount}/sound.mp3" type="audio/mp3" preload="auto"></audio>\n`;

    result += backgroundImgTag;
    result += objectImgTag;
    result += audioTag;
  }
}

console.log(result);
