import { ProductoPedido } from './../../data-type';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-odetalle',
  templateUrl: './odetalle.component.html',
  styleUrls: ['./odetalle.component.css']
})
export class OdetalleComponent implements OnInit {
  details: any [] = [];
  private pedidoId: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    let value = localStorage.getItem('pedidoId');
    value = value !== null ? value : "";
    this.pedidoId = JSON.parse(value) || 0;
    this.orderService.getProductosPorPedido(this.pedidoId).subscribe(productos => {
      console.log(productos);
      this.details = productos.pedido_Productos.map((p: ProductoPedido) => ({
        pedidoId: productos.pedidoId,
        fechaEntrega: p.fechaEntrega,
        cantidad: p.cantidad,
        totalProducto: p.totalProducto
      }));
    });

  }
}

