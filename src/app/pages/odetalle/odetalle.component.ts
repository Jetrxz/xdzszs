import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-odetalle',
  templateUrl: './odetalle.component.html',
  styleUrls: ['./odetalle.component.css']
})
export class OdetalleComponent implements OnInit{
  details: any;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    const pedido_ProductoId = this.orderService.getOrderId();
    this.orderService.getDetailsOrder(pedido_ProductoId).subscribe(data => {
      console.log(data);
      this.details =  Object.values(data);
    });
  }
}
