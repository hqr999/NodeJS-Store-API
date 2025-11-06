const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err)
  return res.status(500).json({ msg: 'Alguma coisa deu errado, tente de novo' })
}

module.exports = errorHandlerMiddleware
