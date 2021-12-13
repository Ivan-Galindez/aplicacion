import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ConsultaEdificioComponent } from './consulta-edificio/consulta-edificio.component';
import { HomeComponent } from './home/home.component';
import { ConsultaUserComponent } from './consulta-user/consulta-user.component';
import { InicarSesionComponent } from './inicar-sesion/inicar-sesion.component';

const routes: Routes = [{
    path:'user',
    component: UserComponent
  } ,{
    path:'inmo',
    component: InmobiliariaComponent
  },{
    path:'ubi',
    component: UbicacionComponent
  },{
    path:'consulEd',
    component: ConsultaEdificioComponent
  },{
    path:'',
    component: HomeComponent
  },{
    path:'consulUsu',
    component: ConsultaUserComponent
  },{
    path:'sign-in',
    component: InicarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

