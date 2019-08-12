import { RouterModule } from '@angular/router';
import { TipohabComponent } from './components/tipohab/tipohab.component';
import { InfogenComponent } from './components/infogen/infogen.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { AtraccionComponent } from './components/atraccion/atraccion.component';
import { ForpagoComponent } from './components/forpago/forpago.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

//Proceso
import { OcupacionComponent } from './components/ocupacion/ocupacion.component';


export const appRoutes = [
    {
        path: 'tipohab', component: TipohabComponent,
        
    },
    {
        path: 'infogen', component: InfogenComponent,
    
    },
    {
        path: 'habitacion', component: HabitacionComponent,
        
    },
    {
        path: 'atraccion', component: AtraccionComponent,
    },
    {
        path: 'forpago', component: ForpagoComponent,
    },
    {
        path: 'usuario', component: UsuarioComponent,
    } ,

    {
        path: 'ocupacion', component: OcupacionComponent,
    }

]

    export const routing = RouterModule.forRoot(appRoutes);