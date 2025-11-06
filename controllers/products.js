

const pegaTodosProdutosEstatico = async (req,res) => {
    throw new Error('testing async errors')
    res.status(200).json({msg:'produtos teste rota'})
}

const pegaTodosProdutos = async (req,res) => {
    res.status(200).json({msg:'produtos teste rota'})
}

module.exports = {
    pegaTodosProdutos,
    pegaTodosProdutosEstatico,
}