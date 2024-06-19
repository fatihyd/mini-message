var express = require("express");
var router = express.Router();
const Message = require("../models/message");

router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", async (req, res) => {
  /*
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect("/");
  */
  const newMessage = new Message({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  try {
    await newMessage.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while saving message!");
  }
});

module.exports = router;
