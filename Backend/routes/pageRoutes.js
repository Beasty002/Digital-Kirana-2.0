const express = require("express");
const router = express.Router();

const pageControllers = require("../controller/Page/pageController");
const authMiddleware = require("../middleware/authMiddleware");

// @desc get HomePage
// @route GET /api/product
router.route("/product")
    .get(authMiddleware,pageControllers.getIndex);

// @desc get SinglePage
// @route GET /api/singlePage/:id
router.route("/singlePage/:id")
    .get(authMiddleware,pageControllers.getSingleProduct);

module.exports = router;