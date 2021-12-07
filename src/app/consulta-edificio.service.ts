import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Data } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConsultaEdificioService {

  constructor(private http: HttpClient) { }

  getEdificio(){
    console.log("wasaaaa")
    return this.http.get("http://localhost:900/consultaEdificio?tipo=edificio")
  }
}
