import { Ubicacion_PedidoModel } from './../models/ubicacionpedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private url = 'https://localhost:7139';

  constructor(private http: HttpClient) { }

  createUbicacion(ubicacion: Ubicacion_PedidoModel) {
    return this.http.post(`${this.url}/api/Ubicacion_Pedido`, ubicacion).pipe(
      map((response: any) => response.ubicacionId)
    );
  }
}
