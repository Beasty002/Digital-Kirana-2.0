const Product = require("../../model/productModel");
const Category = require("../../model/categoryModel")


exports.getIndex = async (req, res) => {
    try {
        const products = await Product.find({});
        const categories = await Category.find({});

        if (!req.costumerToken) {
            return res.status(200).json({
                products: products,
                category: categories,
            })
        }
        return res.status(200).json({
            costumerToken: req.costumerToken,
            products: products,
            category: categories,
        })
    } catch (error) {
        console.log(error)
    }
}


exports.getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const category = product.category;
        const similarProducts = await Product.find({
            category,
            _id: { $ne: product._id }  // Exclude the current product
        });
        if (!req.costumerToken) {
            return res.status(200).json({
                productData: product,
                similarProducts
            })
        }
        return res.status(200).json({
            costumerToken: req.costumerToken,
            productData: product,
            similarProducts
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "DB 500 Error"
        })
    }
}


exports.getCategoryProducts = async (req, res) => {
    try {
        const categoryID = req.params.id;
        // console.log("Inside Product Category")
        const category = await Category.find({_id: categoryID});
        // console.log(category)
        const products = await Product.find({ category: category[0].name });
        if (!req.costumerToken) {
            return res.status(200).json({
                categoryProducts: products
            })
        }
        res.status(200).json({
            costumerToken: req.costumerToken,
            categoryProducts: products
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "DB 500 Error"
        })
    }
}