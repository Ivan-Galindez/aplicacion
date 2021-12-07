import { Component, OnInit } from '@angular/core';
import { ConsultaInmueblesService } from '../consulta-inmuebles.service';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.css']
})
export class InmobiliariaComponent implements OnInit {
datos="chupame este penco";
  constructor(private service: ConsultaInmueblesService) { }

  ngOnInit(): void {
    //alert("madres estamos en inmuebles");
  }

  registrarInmueble(){
    let nombre = (document.getElementById("Nombre") as HTMLInputElement).value
    let tipo = (document.getElementById("Tipo") as HTMLInputElement).value
    let barrio = (document.getElementById("Barrio") as HTMLInputElement).value
    let trans = (document.getElementById("Transaccion") as HTMLInputElement).value
    let area = (document.getElementById("Area") as HTMLInputElement).value
    let banios = (document.getElementById("Banios") as HTMLInputElement).value
    let hab = (document.getElementById("habitaciones") as HTMLInputElement).value
    let estrato = (document.getElementById("Estrato") as HTMLInputElement).value
    let precio = (document.getElementById("Precio") as HTMLInputElement).value

    var inmueble={
      nombre:nombre,
      tipo:tipo,
      barrio: barrio,
      Transaccion:trans,
      Area:area,
      Banios:banios,
      habitaciones:hab,
      Estrato:estrato,
      precio:precio
    }
    this.service.registrarInmueble(inmueble);
    alert("registrando inmueble");
    (document.getElementById("Nombre") as HTMLInputElement).value="";
    (document.getElementById("Tipo") as HTMLInputElement).value="";
    (document.getElementById("Barrio") as HTMLInputElement).value="";
    (document.getElementById("Transaccion") as HTMLInputElement).value="";
    (document.getElementById("Area") as HTMLInputElement).value="";
    (document.getElementById("Banios") as HTMLInputElement).value="";
    (document.getElementById("habitaciones") as HTMLInputElement).value="";
    (document.getElementById("Estrato") as HTMLInputElement).value="";
    (document.getElementById("Precio") as HTMLInputElement).value="";

  }

  getConsulta(){
    //let nombre = (document.getElementById("Nombre") as HTMLInputElement).value
    let tipo = (document.getElementById("Tipo") as HTMLInputElement).value
    //se llama al servicio
    this.service.getConsulta(tipo);
  }

}
