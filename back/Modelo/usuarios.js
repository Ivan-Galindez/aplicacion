var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme=new mongoose.Schema(
{
    cedula: {
        type: String
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    correo: {
        type: String
    },
    celular: {
        type: String
    },
    user: {
        type: String
    },
    clave: {
        type: String
    }    
}

)
module.exports= mongoose.model('usuarios', userscheme)