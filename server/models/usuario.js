const mongoose = require ('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    puesto: { type: String, required: true },
    usuario: { type: String, required: true },
    contrasena: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', usuarioSchema);