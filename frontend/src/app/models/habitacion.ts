export class Habitacion {
    constructor(_id = '', numeroh = 0, numeroc = 0, precio = 0, tipoh = '', descripcion = '', ocupada = false) {
        this._id = _id;
        this.numeroh = numeroh;
        this.numeroc = numeroc;
        this.precio = precio;
        this.tipoh = tipoh;
        this.descripcion = descripcion;
        this.ocupada = ocupada;
    }

    _id: string;
    numeroh: number;
    numeroc: number;
    precio: number;
    tipoh: string;
    descripcion: string;
    ocupada: boolean;
}
