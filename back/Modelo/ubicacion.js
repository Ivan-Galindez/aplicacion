var mongoose = require('mongoose');
//Set up default mongoose connection
const ubicacionscheme = new mongoose.Schema({
    zona: {
        type: String
    },
    barrio: {
        type: String
    }
})
module.exports = mongoose.model('ubicaciones', ubicacionscheme)