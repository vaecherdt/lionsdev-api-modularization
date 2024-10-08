const express = require("express");
const router = express.Router();
const agendamentoController = require("../controllers/agendamentoController");

router.post("/", agendamentoController.criarAgendamento);

router.get("/", agendamentoController.buscarAgendamentos);

router.put("/:id", agendamentoController.atualizarAgendamento);

router.delete("/:id", agendamentoController.deletarAgendamento);

module.exports = router;
