const express = require("express");
const router = express.Router();

const pageControllers = require("../controller/Page/pageController");
const authMiddleware = require("../middleware/authMiddleware");
// @desc get HomePgae
// @route GET /
router.route("/")
    .get(authMiddleware,pageControllers.getIndex);

module.exports = router