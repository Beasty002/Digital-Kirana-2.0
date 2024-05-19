const Product = require("../../model/productModel");
const Category = require("../../model/categoryModel")

exports.getIndex = async(req,res) => {
    if(!req.costumerToken){
        return res.status(200).json({
            products:"All Products",
            category:"All Categories"
        })
    }
    return res.status(200).json({
        costumerToken :req.costumerToken,
        products:"All Products",
        category:"All Categories"
    })
}