# Sistema de Gerenciamento de Petshop

## Descrição

Este é um sistema de gerenciamento para um petshop, desenvolvido utilizando Node.js com Express e MongoDB. O objetivo do projeto é fornecer uma API RESTful para gerenciar agendamentos, clientes e serviços de forma modular e organizada.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose

## Estrutura do Projeto

O projeto possui a seguinte estrutura:
```
petshop/
├── src/
│ ├── controllers/
│ │ ├── agendamentoController.js
│ │ ├── clienteController.js
│ │ └── servicoController.js
│ ├── models/
│ │ ├── Agendamento.js
│ │ ├── Cliente.js
│ │ └── Servico.js
│ ├── routes/
│ │ ├── agendamentoRoutes.js
│ │ ├── clienteRoutes.js
│ │ └── servicoRoutes.js
│ └── app.js
├── .gitignore
├── package.json
└── README.md
```

## Instalação

1. Clone o repositório: git clone <URL do repositório>
2. Navegue até o diretório do projeto: cd petshop
3. Instale as dependências: npm install
4. Inicie o servidor: npm start

## Endpoints

### Agendamentos

- GET /agendamentos - Listar todos os agendamentos
- POST /agendamentos - Criar um novo agendamento
- PUT /agendamentos/:id - Atualizar um agendamento existente
- DELETE /agendamentos/:id - Remover um agendamento

### Clientes

- GET /clientes - Listar todos os clientes
- POST /clientes - Criar um novo cliente
- PUT /clientes/:id - Atualizar um cliente existente
- DELETE /clientes/:id - Remover um cliente

### Serviços

- GET /servicos - Listar todos os serviços
- POST /servicos - Criar um novo serviço
- PUT /servicos/:id - Atualizar um serviço existente
- DELETE /servicos/:id - Remover um serviço

## Contribuições

Sinta-se à vontade para fazer um fork deste repositório e enviar pull requests para melhorias ou correções.

## Licença

Este projeto é licenciado sob a MIT License.

Sinta-se à vontade para ajustar qualquer parte conforme necessário!
