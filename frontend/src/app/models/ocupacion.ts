import { Habitacion } from './habitacion';
import { Forpago } from './forpago';

export class Ocupacion {
    constructor(_id = '', 
                _habitacion = new Habitacion, 
                entrada = new Date,
                salida = new Date,
                nombre = '',
                telefono = '',
                comentarios = '',
                _forpago = new Forpago) {
        
                        
        this._id = _id;
        this._habitacion = _habitacion;
        this.entrada = entrada;
        this.salida = salida;
        this.nombre = nombre;
        this.telefono = telefono;
        this.comentarios = comentarios;
        this._forpago = _forpago;
    }
    
    _id: string;
    _habitacion: Habitacion;
    entrada: Date;
    salida: Date;
    nombre: string;
    telefono: string;
    comentarios: string;
    _forpago: Forpago;
    
}
