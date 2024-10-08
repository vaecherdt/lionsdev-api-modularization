const mongoose = require("mongoose");

const servicoSchema = new mongoose.Schema({
  nomeServico: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
});

const Servico = mongoose.model("Servico", servicoSchema);

module.exports = Servico;
