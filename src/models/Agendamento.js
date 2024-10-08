const mongoose = require("mongoose");

const agendamentoSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
  idCliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  idServico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Servico",
    required: true,
  },
});

const Agendamento = mongoose.model("Agendamento", agendamentoSchema);

module.exports = Agendamento;
