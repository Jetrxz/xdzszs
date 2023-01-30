import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pedido_ProductoModel } from '../models/pedidoproducto.model';
import { PedidosModel } from '../models/pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'https://localhost:7139';

  constructor(private http: HttpClient) { }
  createOrder(pedido: PedidosModel): Observable<any> {
    return this.http.post<any>(`${this.url}/api/Pedidos`, pedido);
  }
  getProductosPorPedido(pedidoId:number): Observable<any> {
    return this.http.get(`${this.url}/api/Pedidos/${pedidoId}`);
  }
  getPedidosporCliente(clienteId:number): Observable<any> {
    console.log(clienteId);
    return this.http.get(`${this.url}/api/Pedidos/cliente/${clienteId}`);
  }
}

