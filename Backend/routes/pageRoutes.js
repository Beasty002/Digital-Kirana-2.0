const express = require("express");
const router = express.Router();

const pageControllers = require("../controller/Page/pageController");
const authMiddleware = require("../middleware/authMiddleware");

// @desc getReactHomeOrIndexPage
// @route GET /api/homePage
router.route("/homePage")
    .get(authMiddleware,pageControllers.getIndex);

 // @desc getReactHomeOrIndexPage
// @route GET /api/categoryNames
router.route("/categoryNames")
    .get(authMiddleware,pageControllers.getCategoryName);

// @desc getSingelProductPagewithSimilarProducts
// @route GET /api/singlePage/:id
router.route("/singlePage/:id")
    .get(authMiddleware,pageControllers.getSingleProduct);

// @desc getReactCategoryProductsPage
// @route GET /api/productCategory/:id
router.route("/productCategory/:name")
    .get(authMiddleware,pageControllers.getCategoryProducts);   

// @desc getPaymentSuccessPage
// @route GET /api/esewa-success/
router.route("/esewa-success")
    .get(authMiddleware,pageControllers.handleEsewaSuccess,pageControllers.updateOrderAfterPayment); 


// @desc Create Payment Order
// @route GET /api/create
router.route("/create")
    .post(authMiddleware,pageControllers.createOrder); 


module.exports = router;