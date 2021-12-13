import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Data } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getConsulta(){
    //console.log("wasaaaa")
    return this.http.get("http://localhost:900/consulta")
  }

  getConsulInmu(inmueble:any){
    return this.http.get("http://localhost:900/consultaInmu?tipo="+ inmueble.tipo + "&transaccion=" + inmueble.transaccion+"&habitaciones="+inmueble.habitaciones+"&barrio="+inmueble.barrio)
  }

  getConsultaBarrio(){
    //console.log("wasaaaa")
    return this.http.get("http://localhost:900/consultaBarrio")
  }
}
