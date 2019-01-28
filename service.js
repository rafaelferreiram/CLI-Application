const axios = require('axios');
const URL = 'https://swapi.co/api/people'

async function getPersonagens(nome){
    const url = `${URL}/?search=${nome}&format=json`;
    const result = await axios.get(url);
    return result.data;
}
module.exports = {
    getPersonagens
}