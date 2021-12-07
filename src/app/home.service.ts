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
}
