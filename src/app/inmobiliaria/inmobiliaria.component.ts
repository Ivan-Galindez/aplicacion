import { Component, OnInit } from '@angular/core';
import { ConsultaInmueblesService } from '../consulta-inmuebles.service';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.css']
})
export class InmobiliariaComponent implements OnInit {

  constructor(private service: ConsultaInmueblesService) { }

  ngOnInit(): void {
    alert("madres estamos en inmuebles");
  }

  registrarInmueble(){
    let nombre = (document.getElementById("Nombre") as HTMLInputElement).value
    let tipo = (document.getElementById("Tipo") as HTMLInputElement).value
    var inmueble={
      nombre:nombre,
      tipo:tipo
    }
    this.service.registrarInmueble(inmueble);
    alert("registrando inmueble");
  }

}
