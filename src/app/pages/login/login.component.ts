import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  nomeUsuario: string;

  constructor(private rota: Router) {}

  login(){
//console.log("teste", this.nomeUsuario);
    sessionStorage.setItem('usuario', this.nomeUsuario);
    this.rota.navigate(['home']);
  }
}
