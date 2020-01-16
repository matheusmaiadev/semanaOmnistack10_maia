//axios: chamadas para outras apis disponiveis
const axios = require('axios');

//importando a estrutura de um dev
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray')

//Controller Funções: index(mostrar lista), show(mostrar unico), store(criar), update(alterar), destroy(delete)

module.exports = {
  async index(request, response){
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {

    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });
    if (!dev) {

      //await esperar a api do git que pode demorar
      const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = apiresponse.data;

      const techsArray = parseStringAsArray(techs);
      
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })
    }
    //Envia um json como resposta... precisa enviar um vetor ou um objeto (utilizar  '{}')
    return response.json(dev);
  }
}