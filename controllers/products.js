const Product = require('../models/product')


const pegaTodosProdutosEstatico = async (req,res) => {
    const products = await Product.find({featured:true})
    res.status(200).json({products,number_elements:products.length})
}

const pegaTodosProdutos = async (req,res) => {
    const products = await Product.find(req.query)

    res.status(200).json({products,number_elements:products.length})
}

module.exports = {
    pegaTodosProdutos,
    pegaTodosProdutosEstatico,
}