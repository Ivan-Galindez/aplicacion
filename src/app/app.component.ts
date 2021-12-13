import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Inicio';
  isLogin: string;

  constructor(private route: Router){ 
    this.isLogin = localStorage.getItem("isLogin") || "false";
  }

  onInit(){
    this.isLogin = localStorage.getItem("isLogin") || "false";
  }
  logout() {
    localStorage.removeItem("isLogin");
    this.route.navigate(["/user"]);
    location.reload();
  }

}
