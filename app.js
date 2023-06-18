
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors')


console.clear();

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base=5] = arg3.split('=');

// const base = 8

crearArchivo(argv.B, argv.L, argv.H)
  .then(nombreArchivo =>console.log(nombreArchivo.rainbow, 'creado'.bgWhite.black))
  .catch(err => console.log(err));
