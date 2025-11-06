require('dotenv').config()


const express = require('express')
const app = express()
const prodsRotas = require('./routes/products')
const conexaoBD = require('./db/connect')


const naoEncontradoMiddleware = require('./middleware/not-found');
const  erroMiddleware = require('./middleware/error-handler')

// middleware 
app.use(express.json())

//rotas 
app.get('/',(req,res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Rota dos Produtos</a>')
})

app.use('/api/v1/products',prodsRotas)


//products routes 


app.use(naoEncontradoMiddleware)
app.use(erroMiddleware)

const port = process.env.PORT || 3000



const start = async () => {
    try {
        //Connect DB
        await conexaoBD(process.env.MONGO_URI)
        app.listen(port,console.log(`Servidor está ouvindo na porta ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()