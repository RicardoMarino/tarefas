//Encadeamento de função
const app = require('express')()
const port = process.env.PORT || 3000
const db = require('./config/db')
const consign = require('consign')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(port, () => {
    console.log(`Backend em execução na porta: ${port}`)
})