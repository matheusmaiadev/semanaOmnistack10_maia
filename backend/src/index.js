//Express é uma 'microAPI' que é responsalvel pelas rotas (servidor) 
//Importando express... para ter acesso as funcionalidades dessa biblioteca 
const express = require('express');

//Inportanto a bibliotaca mongoose... para abrir a base de dados mongoDB
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

//MongoDB (Não-relacional) (ideal para aplicação que não possui muitos relacionamentos), conectando a base de dados (Usando o copy do site MongoDB Atlas)
mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-id5s7.mongodb.net/week10?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//Indica para o Express para atender requicisoes to tipo Json, precisa ser antes das rotas
app.use(express.json());
app.use(routes);
app.listen(3333);

//[PARA EXECUTAR] node index.js
//[PARA EXECUTAR] [COM NODEMON] nodemon index.js ou 'yarn dev' (Esse ultimo foi configurado no 'package.json')