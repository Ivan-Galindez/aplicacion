import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
//import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

const router: Routes=[{
  path:'user',
  component: UserComponent,
},{
  path:'inmo',
  component: InmobiliariaComponent
},{
  path:'ubi',
  component: UbicacionComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InmobiliariaComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(router)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
