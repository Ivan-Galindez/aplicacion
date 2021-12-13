import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-inicar-sesion',
  templateUrl: './inicar-sesion.component.html',
  styleUrls: ['./inicar-sesion.component.css']
})
export class InicarSesionComponent implements OnInit {

  respuestaRegistro: any;
  isLogin: any;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.isLogin = localStorage.getItem("isLogin") || "false";
  }
  
  login() {
    let tip = (document.getElementById("usuario") as HTMLInputElement).value;
    let val = (document.getElementById("contrasena") as HTMLInputElement).value;


    this.service.login(tip, val).subscribe((data: any) => {
      if (data.respuesta) {
        this.isLogin = data.respuesta.toString();
        localStorage.setItem("isLogin", "true");
        location.reload();// recarga la pagina
      }
    })
  }

}
