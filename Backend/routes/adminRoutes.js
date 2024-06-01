const express = require("express");
const router = express.Router();

const AdminControllers = require("../controller/Admin/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

const Admin = require("../model/adminModel");;

// @desc postAdminLogin
// @route /admin/login
router.route("/login")
  .post(adminMiddleware, AdminControllers.postAdminLogin)

// @desc getAdminDashBoard
// @route GET /admin/dashbaord
router.route("/dashboard")
  .get(adminMiddleware,AdminControllers.getDashboard);

// @desc postAddProduct
// @route POST /admin/add-product
router.route("/add-product")
  .post(adminMiddleware, AdminControllers.postAddProduct)

// @desc postEditProduct
// @route POST /admin/edit-product/:id
router.route("/edit-product/:id")
  .post(adminMiddleware, AdminControllers.postEditProduct);

// @desc getAllProducts
// @route GET /admin/allProducts
router.route("/allProducts")
  get(adminMiddleware, AdminControllers.getAllProducts);

module.exports = router;