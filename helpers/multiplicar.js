const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base, listar = false, hasta = 10) => {

  try {
    let salida, consola = '';

    for (let i = 1; i <= hasta; i++) {
      consola += `${colors.bgCyan.red(base)} ${colors.red('X')} ${colors.bgMagenta.white(i)} = ${base * i}\n`;
      salida += `${base} X ${i} = ${base * i}\n`;
    }

    if (listar) {

      console.log('==================');
      console.log(' Tabla del:', base);
      console.log('==================');
      console.log(consola)
    };

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

    return (`tabla-${base}.txt`);

  } catch (error) {
    console.log(error, 'OOps, algo salió mal');
  }

}

module.exports = {
  crearArchivo
}