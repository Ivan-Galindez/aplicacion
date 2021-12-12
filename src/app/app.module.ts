import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service'
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ConsultaInmueblesService } from './consulta-inmuebles.service';
import { ConsultaEdificioComponent } from './consulta-edificio/consulta-edificio.component';
import { ConsultaEdificioService } from './consulta-edificio.service';
import { HomeComponent } from './home/home.component';
import { HomeService} from './home.service';
import { InicarSesionComponent } from './inicar-sesion/inicar-sesion.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InmobiliariaComponent,
    UbicacionComponent,
    ConsultaEdificioComponent,
    HomeComponent,
    InicarSesionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [ConsultaInmueblesService, ConsultaEdificioService, HomeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
