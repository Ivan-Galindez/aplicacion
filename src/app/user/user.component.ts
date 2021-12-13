import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  respuestaRegistro:any;
  
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  registrarUsu(){
    let cedula = (document.getElementById("cedula") as HTMLInputElement).value;
    let nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    let apellido = (document.getElementById("apellido") as HTMLInputElement).value;
    let correo = (document.getElementById("correo") as HTMLInputElement).value;
    let celular = (document.getElementById("celular") as HTMLInputElement).value;

    let user = (document.getElementById("user") as HTMLInputElement).value;
    let clave = (document.getElementById("clave") as HTMLInputElement).value;

    var usuario={
      cedula:cedula,
      nombre:nombre,
      apellido:apellido,
      correo:correo,
      celular:celular,
      user:user,
      clave:clave
    }

    this.service.registrarUsu(usuario).subscribe( data => {
      this.respuestaRegistro=data;
    })
    alert("registrando Usuario");
    (document.getElementById("cedula") as HTMLInputElement).value="";
    (document.getElementById("nombre") as HTMLInputElement).value="";
    (document.getElementById("apellido") as HTMLInputElement).value="";
    (document.getElementById("correo") as HTMLInputElement).value="";
    (document.getElementById("celular") as HTMLInputElement).value="";
    (document.getElementById("user") as HTMLInputElement).value="";
    (document.getElementById("clave") as HTMLInputElement).value="";

  }

  

}
