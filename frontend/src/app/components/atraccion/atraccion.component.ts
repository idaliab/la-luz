import { Component, OnInit } from '@angular/core';

import { AtraccionService } from '../../services/atraccion.service';
import { NgForm } from '@angular/forms';
import { Atraccion } from '../../models/atraccion';

declare var M: any;

@Component({
  selector: 'app-atraccion',
  templateUrl: './atraccion.component.html',
  styleUrls: ['./atraccion.component.css'],
  providers: [ AtraccionService ]
})
export class AtraccionComponent implements OnInit {

  constructor(private atraccionService: AtraccionService) { }

  ngOnInit() {
    this.getAtracciones();
  }

  addAtraccion(form?: NgForm) {
    //console.log(form.value);
    if(form.value._id) {
      this.atraccionService.putAtraccion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getAtracciones();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.atraccionService.postAtraccion(form.value)
      .subscribe(res => {
        this.getAtracciones();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getAtracciones() {
    this.atraccionService.getAtracciones()
      .subscribe(res => {
        this.atraccionService.atracciones = res as Atraccion[];
      });
  }

  editAtraccion(atraccion: Atraccion) {
    this.atraccionService.selectedAtraccion = atraccion;
  }

  deleteAtraccion(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.atraccionService.deleteAtraccion(_id)
        .subscribe(res => {
          this.getAtracciones();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.atraccionService.selectedAtraccion = new Atraccion();
    }
  }
}

