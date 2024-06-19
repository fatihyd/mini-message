var express = require("express");
var router = express.Router();

const Message = require("../models/message");

router.get("/", async function (req, res, next) {
  // res.render("index", { messages });
  try {
    const messages = await Message.find().sort({ added: -1 });
    res.render("index", { messages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching messages.");
  }
});

module.exports = router;
