const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    id: {type: String, required: true, auto: true,},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true}
})
module.exports = mongoose.model('usuario', User);