const Product = require("../../model/productModel");

exports.getIndex = async(req,res) => {
    res.send(req.cookies);
}