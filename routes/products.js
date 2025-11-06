const express = require('express')
const router = express.Router()

const { pegaTodosProdutos,pegaTodosProdutosEstatico } = require('../controllers/products')

router.route('/').get(pegaTodosProdutos)
router.route('/static').get(pegaTodosProdutosEstatico)

module.exports = router