const Agendamento = require("../models/Agendamento");

async function criarAgendamento(req, res) {
  const { data, horario, idCliente, idServico } = req.body;
  try {
    const novoAgendamento = new Agendamento({
      data,
      horario,
      idCliente,
      idServico,
    });
    const agendamentoSalvo = await novoAgendamento.save();
    res.status(201).json({
      mensagem: "Agendamento adicionado com sucesso",
      agendamento: agendamentoSalvo,
    });
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao adicionar agendamento",
      erro: erro.message,
    });
  }
}

async function buscarAgendamentos(req, res) {
  try {
    const agendamentos = await Agendamento.find();
    res.status(200).json(agendamentos);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar agendamentos",
      erro: erro.message,
    });
  }
}

async function atualizarAgendamento(req, res) {
  const { id } = req.params;
  const { data, horario, idCliente, idServico } = req.body;
  try {
    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(
      id,
      { data, horario, idCliente, idServico },
      { new: true, runValidators: true }
    );
    if (agendamentoAtualizado) {
      res.status(200).json({
        mensagem: "Agendamento atualizado com sucesso",
        agendamento: agendamentoAtualizado,
      });
    } else {
      res.status(404).json({ mensagem: "Agendamento não encontrado" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao atualizar agendamento",
      erro: erro.message,
    });
  }
}

async function deletarAgendamento(req, res) {
  const { id } = req.params;
  try {
    const agendamentoDeletado = await Agendamento.findByIdAndDelete(id);
    if (agendamentoDeletado) {
      res.status(200).json({
        mensagem: "Agendamento deletado com sucesso",
        agendamento: agendamentoDeletado,
      });
    } else {
      res.status(404).json({ mensagem: "Agendamento não encontrado" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao deletar agendamento",
      erro: erro.message,
    });
  }
}

module.exports = {
  criarAgendamento,
  buscarAgendamentos,
  atualizarAgendamento,
  deletarAgendamento,
};
