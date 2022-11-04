const bookLength = 8;
const bookPageLength = 8;

let result = new String();

for (let bookCount = 0; bookCount <= bookLength; bookCount++) {
  for (
    let bookPageCount = 1;
    bookPageCount <= bookPageLength;
    bookPageCount++
  ) {
    // assets.js
    result += `<img id="b${bookCount}-p${bookPageCount}-bg" src="./assets/book${bookCount}/page${bookPageCount}/background.png" />\n`;
    result += `<img id="b${bookCount}-p${bookPageCount}-ob" src="./assets/book${bookCount}/page${bookPageCount}/object.png" />\n`;
    result += `<audio id="b${bookCount}-p${bookPageCount}-so" src="./assets/book${bookCount}/page${bookPageCount}/sound.mp3" type="audio/mp3" preload="auto"></audio>\n`;
  }
}

console.log(result);
