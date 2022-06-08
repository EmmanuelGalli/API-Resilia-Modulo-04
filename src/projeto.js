const express = require('express');
const app = express();
const cors = require('cors');
//importando controller
const diaria = require('./controllers/diaria-controller.js')
//importando BD
const bd = require('./infra/sqlite-db.js')

//body-parser
app.use(express.json())
app.use(cors())
//chamando controller e passando o express
diaria(app, bd)

const port = process.env.PORT || 3000;

app.listen( port , ()=>{
    console.log("rodando na porta 3000")
}) 