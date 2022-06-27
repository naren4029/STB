const express = require("express");
const app = express();
const path = require("path");
const generateShortUrl = require("./generateShortUrl/generateShortUrl");
const redirectUrl = require("./redirectUrl/redirectUrl");
const port = process.env.port || 80;

const staticFilepath = "../../../frontend/stb-url-shortner/";

app.use(express.static(path.join(__dirname, staticFilepath + "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, staticFilepath + "build", "index.html"));
});

app.use("/generateShortUrl", generateShortUrl);

app.use("/:code", redirectUrl);

let server = app.listen(port, () => {
  let port = server.address().port;

  console.log("App listening to port=> ", port);
});
