const express = require("express");
const router = express.Router();

const pageControllers = require("../controller/Page/pageController");
const authMiddleware = require("../middleware/authMiddleware");

// @desc getReactHomeOrIndexPage
// @route GET /api/homePage
router.route("/homePage")
    .get(authMiddleware,pageControllers.getIndex);

// @desc getSingelProductPagewithSimilarProducts
// @route GET /api/singlePage/:id
router.route("/singlePage/:id")
    .get(authMiddleware,pageControllers.getSingleProduct);

// @desc getReactCategoryProductsPage
// @route GET /api/category/:id
router.route("/productCategory/:id")
    .get(authMiddleware,pageControllers.getCategoryProducts);   


module.exports = router;