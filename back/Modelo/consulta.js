var modeloUsuario = require('./inmuebles');
require('./conexion_bd')

modeloUsuario.find({}, (err, docs) => {
    console.log(docs[1].nombre)
})