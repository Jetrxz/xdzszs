import { PedidosModel } from './../../models/pedidos.model';
import { CartService } from './../../services/cart.service';
import { UbicacionService } from './../../services/ubicacion.service';
import { OrderService } from './../../services/order.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Ubicacion_PedidoModel } from 'src/app/models/ubicacionpedido.model';
import { Product } from 'src/app/data-type';
import { Pedido_ProductoModel } from 'src/app/models/pedidoproducto.model';
import { ComprobanteModel } from 'src/app/models/comprobante.model';
import { ComprobanteService } from 'src/app/services/comprobante.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  pedidoId: number = 0;
  checkoutForm: any;
  userData: any;
  posicioninical: any = { lat: -12.075023128160083, lng: -75.20239040344387 };
  marcador: any = { lat: -12.075023128160083, lng: -75.20239040344387 };

  constructor(
    public userService: UserService,
    private router: Router,
    public orderService: OrderService,
    public ubicacionService: UbicacionService,
    public cartService: CartService,
    public comprobanteService:ComprobanteService
  ) {
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
      this.router.navigate(['checkout']);
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
    else {
      this.router.navigate(['account']);
    }
  }
  onMapClick(event: any) {
    this.marcador = event.latLng;
  }
  onSubmit() {
    const ubicacion = new Ubicacion_PedidoModel();
    ubicacion.latitud = this.marcador.lat;
    ubicacion.longitud = this.marcador.lng;
    ubicacion.direccion = this.checkoutForm.value.direccion;
    ubicacion.referencia = this.checkoutForm.value.referencia;
    this.ubicacionService.createUbicacion(ubicacion).subscribe(response => {
      const ubicacionId = response;
      const userString = localStorage.getItem('user');
      const fechaActual = new Date();
      const fechaEntrega = new Date(fechaActual);
      fechaEntrega.setDate(fechaEntrega.getDate() + 1);
      let pedido = new PedidosModel();
      if (userString) {
        const user = JSON.parse(userString);
        const clienteId = user.clienteId;
        pedido.fechaPedido = new Date(Date.now());
        pedido.fechaEntrega = fechaEntrega;
        pedido.total = this.cartService.getTotalPrice();
        pedido.estadoId = 1;
        pedido.clienteId = clienteId;
        pedido.ubicacionId = ubicacionId;
        const productos = this.cartService.getProducts();
        productos.subscribe(productos => {
          productos.forEach((a: Product) => {
            const pedidoProducto = new Pedido_ProductoModel();
            pedidoProducto.productoId = a.productoId;
            pedidoProducto.cantidad = a.quantity;
            pedidoProducto.totalProducto = a.quantity * a.precio;
            pedido.pedido_Productos.push(pedidoProducto);
          });
        });
      }
      this.orderService.createOrder(pedido).subscribe(response => {
        this.pedidoId = response.pedidoId;
        const pedidoId = response.pedidoId;
        if (pedidoId) {
          localStorage.setItem('pedidoId', JSON.stringify(pedidoId));
        }
        this.orderService.getProductosPorPedido(pedidoId).subscribe(response => {
        });
        const comprobante = new ComprobanteModel();
        comprobante.descripcion = `Comprobante del pedido número ${pedidoId}`;
        comprobante.codigo=this.generateRandomNumber(0,10000);
        comprobante.pedidoId = this.pedidoId;
        comprobante.tipoComprobanteId = 1;
        this.comprobanteService.createComprobante(comprobante).subscribe(response => {
          // cualquier acción adicional
        });
        this.router.navigate(['odetails']);
      });
    });
  }
  generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
