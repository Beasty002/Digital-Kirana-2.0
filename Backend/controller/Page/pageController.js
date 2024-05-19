const Product = require("../../model/productModel");
const Category = require("../../model/categoryModel")

exports.getIndex = async(req,res) => {
    const products = await Product.find({});
    const categories = await Category.find({});
    if(!req.costumerToken){
        return res.status(200).json({
            products:products,
            category:categories,
        })
    }
    return res.status(200).json({
        costumerToken :req.costumerToken,
        products:products,
        category:categories,
    })
}

exports.getSingleProduct = async(req,res) => {
    const product = await Product.findById(req.params.id);
    if(!req.costumerToken){
        return res.status(200).json({
            productData:product,
        })
    }
    return res.status(200).json({
        costumerToken :req.costumerToken,
        productData:product,
    })
}