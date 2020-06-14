const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3001;
require('./DB/index')
require('./DB/MDLS/user')
const admin = require('./routes/admin');

app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/rt', admin)

app.listen(port, (
    console.log(`Conectado a porta ${port}`)
))