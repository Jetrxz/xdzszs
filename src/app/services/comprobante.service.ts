import { ComprobanteModel } from './../models/comprobante.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {
  private url = 'https://localhost:7139';

  constructor(private http: HttpClient) { }

  createComprobante(comprobanteData:ComprobanteModel){
    return this.http.post(`${this.url}/api/Comprobante`, comprobanteData);
  }
}
