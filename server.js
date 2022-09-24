const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.use(morgan("dev"));

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// index.html을 rendering
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("Listening on http://localhost:8080");
});
