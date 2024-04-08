const express = require("express");
const router = express.Router();

const {
  user
} = require("../controllers/adventure");

router.get("/userip", user);

module.exports = router;
