import { Component, OnInit } from '@angular/core';
import { ConsultaInmueblesService } from '../consulta-inmuebles.service';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.css']
})
export class InmobiliariaComponent implements OnInit {

  datos:any;
  archivos:any;

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

    let formData=new FormData()
      formData.append('nombre',nombre)
      formData.append('tipo',tipo)
      formData.append('barrio', barrio)
      formData.append('Transaccion',trans)
      formData.append('Area',area)
      formData.append('Banios',banios)
      formData.append('habitaciones',hab)
      formData.append('Estrato',estrato)
      formData.append('precio',precio)
      formData.append("files", this.archivos[0]);
    
    this.service.registrarInmueble(formData).subscribe( data => {
      this.datos=data;
    });

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

  setFile(event: any){
    this.archivos=event.srcElement.files
    alert(this.archivos[0].name)
  }

  guardarImagen(){
    let formData=new FormData()
    formData.append("files", this.archivos[0]);
    this.service.guardarImagen(formData).subscribe (data => {

    })
  }

}
