let express = require("express");
let router = express.Router();
let redirectUrlUtil = require("./redirectUrlUtil");

router.get("/", redirectUrlUtil.GET_urlRedirect);

module.exports = router;
