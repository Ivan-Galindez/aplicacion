//Este codigo contiene las caracteristicas de la "Collecion" inmueble que esta en la base de datos de Mongo
const { ObjectId } = require("bson");
var mongoose = require('mongoose');
//Set up default mongoose connection
const inmueblescheme = new mongoose.Schema({
    nombre: {
        type: String
    },
    tipo: {
        type: String
    },
    imagen: {
        type: String
    },
    ubicacion: {
        type: mongoose.Schema.ObjectId, ref:"ubicaciones"
    },
    Transaccion: {
        type: String
    },
    Area: {
        type: Number
    },
    Banios: {
        type: Number
    },
    habitaciones: {
        type: Number
    },
    Estrato: {
        type: Number
    },
    Precio: {
        type: Number
    },
    Descripcion: {
        type: String
    }
});
module.exports = mongoose.model('Inmueble', inmueblescheme)