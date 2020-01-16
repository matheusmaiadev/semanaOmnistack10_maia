const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')


const routes = Router();

/*
Métodos HTTP: GET(receber), POST(criar, PUT(editar), DELETE(deletar)

Tipos de parêmetros (dentro do express):
  Query Params: request.query (Filtros, ordenação, paginação...) (usados no GET) (nao tem tanto a ver com criação) (fica visivel no endereço )
  Route Params: request.params (Identificar um recurso na alteração ou remoçao) (usados no PUT e no DELETE)
  Body: request.body  (usado no POST e PUT) (Dados para criação ou editação)

Request é uma requesição, é o que o cliente envia para a gente (no caso o FrontEnd)
Response é como a gente vai devolver a resposta e tem varios formatos de respostas

[URL] = "http://localhost:3333/devs/"
*/
routes.get ('/devs/', DevController.index);
routes.post('/devs/', DevController.store );
routes.get('/search', SearchController.index)
module.exports = routes;