import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
//import { HttpModule} from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ConsultaInmueblesService } from './consulta-inmuebles.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InmobiliariaComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [ConsultaInmueblesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
