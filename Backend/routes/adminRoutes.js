const express = require("express");
const router = express.Router();

const AdminControllers = require("../controller/Admin/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

const Admin = require("../model/adminModel");;

// @desc postAdminLogin
// @route /admin/auth/login
router.route("/auth/login")
  .post(AdminControllers.postAdminLogin)

// @desc getAdminDashBoard
// @route GET /admin/dashboard/index
router.route("/dashboard/index")
  .get(adminMiddleware,AdminControllers.getDashboard);

// @desc postAddProduct
// @route POST /admin/dashboard/add-product
router.route("/dashboard/add-product")
  .post(adminMiddleware, AdminControllers.postAddProduct)

// @desc postEditProduct
// @route POST /admin/dashboard/edit-product/:id
router.route("/dashboard/edit-product/:id")
  .post(adminMiddleware, AdminControllers.postEditProduct)
  .get(adminMiddleware,AdminControllers.getEditProduct
  )

// @desc getAllProducts
// @route GET /admin/dashboard/allProducts
router.route("/dashboard/allProducts")
  .get(adminMiddleware, AdminControllers.getAllProducts);


// @desc postAddCategory
// @route POST /admin/dashboard/add-category
router.route("/dashboard/add-category")
  .post(adminMiddleware,AdminControllers.postAddCategory);
module.exports = router;