const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/servicoController');

router.post('/', servicoController.adicionarServico);

router.get('/', servicoController.buscarServicos);

router.put('/:id', servicoController.atualizarServico);

router.delete('/:id', servicoController.deletarServico);

module.exports = router;