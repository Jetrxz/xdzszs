import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PedidoProductoModel } from '../models/pedidoproducto.model';
import { PedidosModel } from '../models/pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'https://localhost:7139';
  private pedido_ProductoId: number =0 ;

  constructor(private http: HttpClient) { }
  createOrder(pedido: PedidosModel): Observable<any> {
    return this.http.post<any>(`${this.url}/api/Pedidos`, pedido);
  }
  createPedidoProductos(pedidoId: number, pedidoProductos: PedidoProductoModel[]): Observable<any> {
    const url = `${this.url}/api/Pedido_Producto`;
    return this.http.post<any>(url, {pedidoId, pedidoProductos});
  }
  getDetailsOrder(preparacioninsumoId: number): Observable<any> {
    const url = `${this.url}/api/Pedido_Producto/${preparacioninsumoId}`;
    return this.http.get<any>(url);
  }
  setOrderId(id: number): void {
    this.pedido_ProductoId = id;
  }
  getOrderId(): number {
    return this.pedido_ProductoId;
  }
}

