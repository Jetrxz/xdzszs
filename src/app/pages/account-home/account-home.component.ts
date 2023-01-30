import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {
  username = '';
  checkoutForm: any;
  userData: any;

  constructor(private userService: UserService) {
    this.checkoutForm = new FormGroup({
      'nombres': new FormControl(''),
      'apellidos': new FormControl(''),
      'celular': new FormControl(''),
      'direccion': new FormControl(''),
      'referencia': new FormControl(''),
      'correo': new FormControl('')
    });
    this.userData = {
      nombres: '',
      apellidos: '',
      celular: ''
    };
  }
  ngOnInit(): void {
    this.userService.reloadUser();
    if (this.userService.isUserLoggedIn.getValue()) {
      const user = localStorage.getItem('user');
      if (user) {
        let parsedUser = JSON.parse(user);
        this.userData.nombres = parsedUser.nombres;
        this.userData.apellidos = parsedUser.apellidos;
        this.userData.celular = parsedUser.celular;
        this.checkoutForm.controls.nombres.setValue(this.userData.nombres);
        this.checkoutForm.controls.apellidos.setValue(this.userData.apellidos);
        this.checkoutForm.controls.celular.setValue(this.userData.celular);
      }
    }
    this.username = this.userService.getUsername();
  }
}
