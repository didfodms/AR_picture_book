const fs = require("fs");
const dir = "./assets/book1/page1/";

try {
  fs.readdir(dir, (err, files) => {
    console.log(files.length);
  });
} catch (err) {
  console.log(err);
}
