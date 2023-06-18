const argv = require('yargs')
  .option('B', {
  alias: 'base',
  type: 'number',
  describe: 'Es la base de la tabla de multiplicar',
  demandOption: true

}).check((argv, options)=>{
  if (isNaN(argv.B)) {
    throw 'La base debe ser un número'
  }
  return true

}).option('L', {
  alias: 'listar',
  type: 'boolean',
  description: 'Si es falso no lista la tabla',
  default: false

}).option('H',{
  alias: 'hasta',
  type: 'number',
  description: 'Hasta el numero que se multiplicará',
  demandOption: false,
  default:10

}).check((argv, options)=>{
  if (isNaN(argv.H)) {
    throw 'Debe ser un número'
  }
  return true
})
.argv

module.exports = argv;
