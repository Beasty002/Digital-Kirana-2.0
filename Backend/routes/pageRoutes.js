const express = require("express");
const router = express.Router();

const pageControllers = require("../controller/Page/pageController");

// @desc get HomePgae
// @route GET /
router.route("/").get(pageControllers.getIndex);

module.exports = router