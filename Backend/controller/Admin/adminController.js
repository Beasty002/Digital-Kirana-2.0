// const Admin = require("../../model/adminModel")
const Products = require("../../model/productModel")

exports.getDashboard = async(req,res) => {
  if(!req.admin){
    res.status(401).json({
      login:false,
      message:"Admin is not logged in"
    })
  }
  try {
    res.status(200).json({
      login:true,
      message:"Admin is logged in",
      admin:req.admin
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:"DB 500 Error"
    })
  }
}

exports.getAllProducts = async(req,res) =>{
  if(!req.admin){
    res.status(401).json({
      login:false,
      message:"Admin is not logged in"
    })
  }
  try {
    const products = await Products.find({});
    res.status(200).json({
      login:true,
      message:"Product Send Successfully",
      products:products
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:"DB 500 Error"
    })
  }
}

