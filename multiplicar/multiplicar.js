const fs = require('fs');
const colors = require('colors');

let crearArchivo = (tabla, limite = 10) => {
     return new Promise((resolve, reject) => {

          if (!Number(tabla)) {
               reject(`El valor introducido ${tabla} no es un numero`);
          } else {
               let data = '';

               for (let i = 0; i <= limite; i++) {
                    data += tabla + ' * ' + i + ' = ' + tabla * i + '\n';

               }
               console.log(data)
               fs.writeFile(`tablas/tabla-${tabla}-al-${limite}.txt`, data, (err) => {
                    if (err)
                         reject(err);
                    else
                         resolve(`tablas/tabla-${tabla}-al-${limite}.txt`);

               });
          }

     });
}

let listarTabla = (tabla, limite = 10) => {

     console.log(`================================`.green)
     console.log(`========Tabla de ${tabla} ==========`.green)
     console.log(`================================`.green)

     for (let i = 0; i <= limite; i++) {
          console.log(`${tabla} * ${i} = ${tabla * i}`);
     }

}

// una forma de exportar modulos
module.exports = {
     crearArchivo,
     listarTabla
}

