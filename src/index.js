const mongoose = require('mongoose');
const connection = "mongodb+srv://Gbreu:cilene123@cluster0-fofpz.mongodb.net/client"

mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log("Conexão feita com sucesso"))
.catch((err) => console.log(`Falha ao conectado o mongoDB ${err}`))
