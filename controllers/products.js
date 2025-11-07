const { Query } = require('mongoose')
const Product = require('../models/product')


const getAllProductsStatic = async (req,res) => {
    const products = await Product.find({featured:true})
    res.status(200).json({products,number_elements:products.length})
}

const getAllProducts = async (req,res) => {
    const { featured } = req.query
    const { company } = req.query 
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if (company) {
        queryObject.company = company
    }
    
    console.log(queryObject)
    const products = await Product.find(queryObject)
    res.status(200).json({products,number_elements:products.length})
}

module.exports = {
   getAllProducts,
   getAllProductsStatic,
}