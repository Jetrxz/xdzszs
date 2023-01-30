import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/data-type';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user.reloadUser();
  }
  signUp(event: any, data: SignUp): void {
    event.preventDefault();
    this.user.userSingUp(data);
  }
  login(event: any, form: any) {
    // Obtener el valor del formulario
    const { Usuario, Contrasena } = form;
    // Llamar al servicio de usuario y pasar el usuario y la contraseña
    this.user.userLogin(Usuario, Contrasena).subscribe(
      (result) => {
        // Si se obtiene una respuesta satisfactoria del servidor, almacena los datos del usuario en el almacenamiento local
        // y redirige al usuario a la página de inicio de sesión
        this.user.isUserLoggedIn.next(true);
        localStorage.setItem('user', JSON.stringify(result));
        this.router.navigate(['account-home']);
      },
      (error) => {
        // Si se produce un error al iniciar sesión, muestra un mensaje de error al usuario
        alert('Usuario o contraseña incorrecta');
      }
    );
  }
}
