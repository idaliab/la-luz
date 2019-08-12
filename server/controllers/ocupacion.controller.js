const Ocupacion = require('../models/ocupacion');
const Habitacion = require('../models/habitacion');

const ocupacionCtrl = {};
const habitacionCtrl = {};

ocupacionCtrl.getOcupaciones = async (req, res, next) => {
    const ocupaciones = await Ocupacion.find();
    res.json(ocupaciones);
};

ocupacionCtrl.getOcupacion = async (req, res, next) => {
    const { id } = req.params;
    const ocupacion = await Ocupacion.findById(id);
    res.json(ocupacion);
};

ocupacionCtrl.editOcupacion = async (req, res, next) => {
    const { id } = req.params;
    const ocupacion = {
        habitacion: req.body.habitacion._id,
        adultos: req.body.adultos,
        salida: req.body.salida,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        comentarios: req.body.comentarios,
        forpago: req.body.forpago._id,
    };
    await Ocupacion.findByIdAndUpdate(id, {$set: ocupacion}, {new: true});
    res.json({status: 'Datos de ocupación actualizados'});
};

ocupacionCtrl.deleteOcupacion = async (req, res, next) => {
    await Ocupacion.findByIdAndRemove(req.params.id);
    res.json({status: 'Datos de ocupación eliminados'});
};

//Verificar si la habitacion y fecha esta ocupada
//ocupacionCtrl.verifyOcupacion = async (req, res, next) => {
    //try {
        //await oupacionCtrl.Habitacion.find(req.params.entrada, req.params.salida);
    
        //start = ISODate("2014-10-18T00:00:00Z")
        //end = ISODate("2014-10-20T00:00:00Z")
        //await db.coleccion('Ocupacion').find({
            //"$and" : [{"fecha" : {"$gte" : req.params.entrada }}, {"fecha" : {"$lte" : req.params.salida }},
            //{"habitacion" : req.params.habitacion.numeroh }
        //]})
    
        /*await db.getCollection('Ocupacion').find({
            "entrada" : {"$lte": ISODate(req.params.entrada)},
            "salida" : {"$gte": ISODate(req.params.salida)}
        }) */
        /*res.json({status: 'Habitacion Desocupada'});
        ocupacionCtrl.createOcupacion();
    } catch (error) {
        res.json({status: 'Habitacion Ocupada'});
    }
    
}; */

ocupacionCtrl.createOcupacion = async (req, res, next) => {
    const ocupacion = new Ocupacion({
        habitacion: req.body.habitacion,
        entrada: req.body.entrada,
        salida: req.body.salida,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        comentarios: req.body.comentarios,
        forpago: req.body.forpago,
    });
    await ocupacion.save();
    res.json({status: 'Tipo de habitación creada'});
};


module.exports = ocupacionCtrl;