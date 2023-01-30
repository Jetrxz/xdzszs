import { Login } from './../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  userSingUp(data: SignUp) {
    this.http.post('https://localhost:7139/api/Cliente/', data, { observe: 'response' })
      .subscribe((result) => {
        this.isUserLoggedIn.next(true);
        localStorage.setItem('user', JSON.stringify(result.body));
        this.router.navigate(['account-home']);
        console.warn("result", result);
      });
  }
  reloadUser() {
    if (localStorage.getItem('user')) {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['account-home']);
    }
  }
  userLogin(Usuario: string, Contrasena: string) {
    // Crea un objeto con los datos de inicio de sesión
    const loginData = {
      Usuario: Usuario,
      Contrasena: Contrasena
    };
    // Envía una solicitud POST a tu API de ASP.NET con los datos de inicio de sesión
    return this.http.post(`https://localhost:7139/api/ClienteLogin?Usuario=${Usuario}&Contrasena=${Contrasena}`, loginData);
  }
  getUsername() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user.nombres;
    }
    return '';
  }
  getUserId() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user.clienteId;
    }
    return 0;
  }
  updateUser(clienteId: string, updatedUserData: any) {
    return this.http.put(`https://localhost:7139/api/Cliente/${clienteId}`, updatedUserData);
   }
}

