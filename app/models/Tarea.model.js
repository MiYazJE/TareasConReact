const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
    titulo: String,
    descripcion: String 
},{
    timestamps: true
});

module.exports = mongoose.model('Tarea', TareaSchema);