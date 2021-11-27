const express = require("express");
const axios = require("axios");

const router = express.Router();

const storiesController = require("../controllers/storiesController");

router.get("/", (req, res) => {
  res.send("API up and running!");
});

router.get("/timeStories", storiesController.getTimeStories);

module.exports = router;
