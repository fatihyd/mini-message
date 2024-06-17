var express = require("express");
var router = express.Router();

const messages = require("../messages");

router.get("/", function (req, res, next) {
  res.render("index", { messages });
});

module.exports = router;
