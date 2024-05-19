const express = require("express");
const router = express.Router();

const pageControllers = require("../controller/Page/pageController");
const authMiddleware = require("../middleware/authMiddleware");

// @desc get HomePage
// @route GET /
router.route("/")
    .get(authMiddleware,pageControllers.getIndex);

// @desc get SinglePage
// @route GET /singlePage/:id
router.route("/singlePage/:id")
    .get(authMiddleware,pageControllers.getSingleProduct);

module.exports = router;