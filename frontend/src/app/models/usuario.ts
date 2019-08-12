export class Usuario {
    constructor(_id = '', nombre = '', puesto = '', usuario = '', contrasena = '') {
        this._id = _id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    _id: string;
    nombre: string;
    puesto: string;
    usuario: string;
    contrasena: string;
}
