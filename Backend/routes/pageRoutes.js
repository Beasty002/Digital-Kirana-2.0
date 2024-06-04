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
// @route GET /api/productCategory/:id
router.route("/productCategory/:id")
    .get(authMiddleware,pageControllers.getCategoryProducts);   

// @desc getPaymentSuccessPage
// @route GET /api/esewa-success/:data
router.route("/esewa-success/:data")
    .get(authMiddleware,pageControllers.handleEsewaSuccess,pageControllers.updateOrderAfterPayment); 


// @desc Create Payment Order
// @route GET /api/create/
router.route("/create/")
    .post(authMiddleware,pageControllers.createOrder); 

// @desc promotionImg
// @route GET /api/promotionImage/
router.route("/promotionImage/")
    .post(authMiddleware,pageControllers.getPromotionImage); 

// @desc getSelectedPromotion
// @route GET /api/selectPromotion/
router.route("/selectPromotion/")
    .get(authMiddleware,pageControllers.getSelectedPromotion); 

module.exports = router;