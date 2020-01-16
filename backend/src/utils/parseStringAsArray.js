module.exports = function parseStringAsArray(arrayAsString) {
  //map pecorre um array, e o trim remove espaçamentos antes e dpois de uma string
  return arrayAsString.split(',').map(tech => tech.trim());
}