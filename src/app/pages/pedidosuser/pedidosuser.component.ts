import { OrderService } from 'src/app/services/order.service';
import { Component, OnInit } from '@angular/core';
import { PedidosModel } from 'src/app/models/pedidos.model';

@Component({
  selector: 'app-pedidosuser',
  templateUrl: './pedidosuser.component.html',
  styleUrls: ['./pedidosuser.component.css']
})
export class PedidosuserComponent implements OnInit {
  pedidos: any;

  constructor(public orderService: OrderService) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      const clienteId = JSON.parse(user).clienteId;
      this.orderService.getPedidosporCliente(clienteId).subscribe(pedidos => {
        this.pedidos = pedidos;
        console.log(pedidos);
      });
    }
  }
}
