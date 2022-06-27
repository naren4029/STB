let express = require("express");
let router = express.Router();
let generateShortUrlUtil = require("./generateShortUrlUtil");
let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

router.post("/", jsonParser, generateShortUrlUtil.POST_processData);

module.exports = router;
