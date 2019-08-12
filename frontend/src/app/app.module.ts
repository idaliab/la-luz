import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './routes';

import { AppComponent } from './app.component';
import { TipohabComponent } from './components/tipohab/tipohab.component';
import { InfogenComponent } from './components/infogen/infogen.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { AtraccionComponent } from './components/atraccion/atraccion.component';
import { ForpagoComponent } from './components/forpago/forpago.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

//Proceso
import { OcupacionComponent } from './components/ocupacion/ocupacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TipohabComponent,
    InfogenComponent,
    HabitacionComponent,
    AtraccionComponent,
    ForpagoComponent,
    UsuarioComponent,
    OcupacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ForpagoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
