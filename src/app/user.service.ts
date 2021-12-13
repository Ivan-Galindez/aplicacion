import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Data } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registrarUsu(usuario:Data){
    return this.http.put("http://localhost:900/insertarUsu",usuario);
  };

  getConsulta(tip:any, val:any){
    return this.http.get("http://localhost:900/consulta"+tip+"?val="+val)
  };

  login(usuario: string, val: string) {
    return this.http.post("http://localhost:900/login", {user:usuario, clave:val})
  };
}
