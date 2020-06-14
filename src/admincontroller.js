var User = require('../DB/MDLS/user')

module.exports = {
  async Criar(req, res) {
    var usuario = new User();
    usuario.collection
      .insertOne({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
      })
      .then(() => console.log("Usuario salvo"))
      .catch((err) => console.log(`Erro ao salvar ${err}`));
  },
};