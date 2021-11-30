import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
//import { ConsultaInmueblesService } from './consulta-inmuebles.service';


const routes: Routes = [{
  path:'user',
  component: UserComponent
  } ,{
  path:'inmo',
  component: InmobiliariaComponent
  },{
  path:'ubi',
  component: UbicacionComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

