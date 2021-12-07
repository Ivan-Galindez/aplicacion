import { Component } from '@angular/core';
import { ConsultaInmueblesService } from './consulta-inmuebles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aplicacion';
  items: any

  constructor(private service: ConsultaInmueblesService){ }
}
