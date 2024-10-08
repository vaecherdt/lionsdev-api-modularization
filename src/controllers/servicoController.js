const Servico = require("../models/Servico");

async function adicionarServico(req, res) {
  const { nomeServico, preco } = req.body;
  try {
    const novoServico = new Servico({ nomeServico, preco });
    const servicoSalvo = await novoServico.save();
    res.status(201).json({
      mensagem: "Serviço adicionado com sucesso!",
      servico: servicoSalvo,
    });
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao adicionar serviço!",
      erro: erro.message,
    });
  }
}

async function buscarServicos(req, res) {
  try {
    const servicos = await Servico.find();
    res.status(200).json(servicos);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar serviços",
      erro: erro.message,
    });
  }
}

async function atualizarServico(req, res) {
  const { id } = req.params;
  const { nomeServico, preco } = req.body;
  try {
    const servicoAtualizado = await Servico.findByIdAndUpdate(
      id,
      { nomeServico, preco },
      { new: true, runValidators: true }
    );
    if (servicoAtualizado) {
      res.status(200).json({
        mensagem: "Serviço atualizado com sucesso!",
        servico: servicoAtualizado,
      });
    } else {
      res.status(404).json({ mensagem: "Serviço não encontrado!" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao atualizar serviço!",
      erro: erro.message,
    });
  }
}

async function deletarServico(req, res) {
  const { id } = req.params;
  try {
    const servicoDeletado = await Servico.findByIdAndDelete(id);
    if (servicoDeletado) {
      res.status(200).json({
        mensagem: "Serviço deletado com sucesso!",
        servico: servicoDeletado,
      });
    } else {
      res.status(404).json({ mensagem: "Serviço não encontrado!" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao deletar serviço",
      erro: erro.message,
    });
  }
}

module.exports = {
  adicionarServico,
  buscarServicos,
  atualizarServico,
  deletarServico,
};
