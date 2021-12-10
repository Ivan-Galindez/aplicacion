import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Data } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConsultaInmueblesService {

  constructor(private http: HttpClient) { }

  registrarInmueble(formData:any){
    let headers=new HttpHeaders();
    headers.set('enctype', 'multipart/form-data')
    return this.http.put("http://localhost:900/registrarInmueble",formData, {headers:headers})
  };

  getConsulta(tipo:any){
    //hace consulta al backend del modelo servicio conectandose por el puerto previamente abierto
    console.log("llego al servicio ahhh pichulaaaaa ffff");
    console.log(tipo);
    this.http.get("http://localhost:900/consultaInmueble?tipo="+tipo).subscribe( data => {
      console.log(data);

    });
  }

  guardarImagen(formData:any){
    let headers=new HttpHeaders();
    headers.set('enctype', 'multipart/form-data')
    return this.http.post("http://localhost:900/guardarImagen", formData, {headers:headers})
  }

/*
  getInmueble(){
    //funcion con la que se va a conectar con el api
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    this.http.get("http://localhost:900/consulta",{headers:headers}).subscribe(data=>{
      console.log(data) 
    })
  }
*/

}
