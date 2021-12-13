import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UbicacionService } from '../ubicacion.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  respu:any;

  constructor(private service: UbicacionService, private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("isLogin") == null){
      this.route.navigate([""]);
    }
  }
  registrarUbicacion(){
    let zona = (document.getElementById("Zona") as HTMLInputElement).value
    let barrio = (document.getElementById("Barrio") as HTMLInputElement).value

    var ubicacion={
      zona:zona,
      barrio: barrio
    }

    this.service.registrarUbicacion(ubicacion).subscribe( data => {
      this.respu=data;
    })
    alert("registrando ubicacion");
    (document.getElementById("Zona") as HTMLInputElement).value="";
    (document.getElementById("Barrio") as HTMLInputElement).value="";

  }

}
