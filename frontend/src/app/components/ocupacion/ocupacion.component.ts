import { Component, OnInit } from '@angular/core';

import { OcupacionService } from '../../services/ocupacion.service';
import { ForpagoService } from '../../services/forpago.service';
import { HabitacionService } from '../../services/habitacion.service';
import { NgForm } from '@angular/forms';
import { Ocupacion } from '../../models/ocupacion';
import { Forpago } from '../../models/forpago';
import { Habitacion } from '../../models/habitacion';

//observa desde forpago
import { Observable } from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-ocupacion',
  templateUrl: './ocupacion.component.html',
    styleUrls: ['./ocupacion.component.css'],
  providers: [OcupacionService, ForpagoService, HabitacionService]
})
export class OcupacionComponent implements OnInit {
  forpago: Forpago[] = [];
  forpagos$: Observable<Forpago[]>;

  constructor(private ocupacionService: OcupacionService, public forpagoService: ForpagoService, public habitacionService: HabitacionService) { }

  ngOnInit() {
    this.getOcupaciones();
    this.habitacionService.getHabitaciones();
    this.forpagoService.getForpagos();
    this.forpagos$ = this.forpagoService.getForpagos$();
    this.forpagos$.subscribe(forpago => this.forpago = forpago);
  }

  addOcupacion(form?: NgForm) {
        this.ocupacionService.postOcupacion(form.value)
        
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Se han guardado los datos'});
      });
  }

  getOcupaciones() {
    this.ocupacionService.getOcupaciones()
      .subscribe(res => {
        this.ocupacionService.ocupacion = res as Ocupacion[];
      });
  }

  editOcupacion(ocupacion: Ocupacion) {
    this.ocupacionService.selectedOcupacion = ocupacion;
  }

  deleteOcupacion(_id: string, form: NgForm) {
    if(confirm('¿Estas seguro de borrarlo?')) {
      this.ocupacionService.deleteOcupacion(_id)
        .subscribe(res => {
          this.getOcupaciones();
          this.resetForm(form);
          M.toast({html: 'Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ocupacionService.selectedOcupacion = new Ocupacion();
    }
  }

}
