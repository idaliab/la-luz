const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res, next) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res, next) => {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena
    });
    await usuario.save();
    res.json({status: 'Usuario creado'});
};

usuarioCtrl.getUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = {
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario actualizado'});
};

usuarioCtrl.deleteUsuario = async (req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario eliminado'});
};

module.exports = usuarioCtrl;