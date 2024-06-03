const Admin = require("../../model/adminModel")
const Product = require("../../model/productModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Category = require("../../model/categoryModel")

exports.getDashboard = async (req, res) => {
  if (!req.admin) {
    return res.status(401).json({
      login: false,
      message: "Admin is not logged in"
    })
  }
  try {
    res.status(200).json({
      login: true,
      message: "Admin is logged in",
      admin: req.admin
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "DB 500 Error"
    })
  }
}

exports.getAllProducts = async (req, res) => {
  if (!req.admin) {
    return res.status(401).json({
      login: false,
      message: "Admin is not logged in"
    })
  }
  try {
    const products = await Product.find({});
    res.status(200).json({
      login: true,
      message: "Product Send Successfully",
      products: products
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "DB 500 Error"
    })
  }
}

exports.postAdminLogin = async (req, res) => {
  const { email, password } = req.body;
  // if(!email || !password){
  //   return res.status(422).json({
  //     message:"Enter Email and Password",
  //   })
  // }
  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.status(422).json({
      message: "No Admin With That Email Exists",
    })
  }
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(422).json({
      message: "Password is Incorrect"
    })
  }
  const adminToken = jwt.sign({ id: admin._id }, process.env.ADMIN_SECRET_KEY, {
    expiresIn: "2h"
  })

  res.cookie("adminToken", adminToken, {
    secure: true,
  })
  res.status(200).json({
    message: "Admin Login Successfull",
    adminToken,
    admin
  })
}

exports.postAddProduct = async (req, res) => {

}

exports.postAddCategory = async (req, res) => {
  if (!req.admin) {
    return res.status(401).json({
      login: false,
      message: "Admin is not logged in"
    })
  }
  try {
    const { name } = req.body;
    const { image } = req.file;
    const category = new Category({
      name,
      imageUrl:image[0].name,
    });
    await category.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "DB 500 Error"
    })
  }
}

exports.getEditProduct = async (req, res) => {
  if (!req.admin) {
    return res.status(401).json({
      login: false,
      message: "Admin is not logged in"
    })
  }
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json({
      productData: product,
      login: true,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "DB 500 Error"
    })
  }
}

exports.postEditProduct = async (req, res) => {
  const id = req.params.id;
  const { name, price, description, category, imageUrl } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id,{
      name,price,description,category
    });
    if(product){
      return res.status(200).json({
        message: "Product updated successfully",
      })
    }
    res.status(500).json({
      message:"Product Cant Be Updated",
    })
  } catch(error){
    console.log(error);
    console.log(error);
    res.status(500).json({
      message: "DB 500 Error"
    })
  }
}