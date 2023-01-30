export class Ubicacion_PedidoModel {
  ubicacionId:number;
  direccion: string;
  latitud: number;
  longitud: number;
  referencia: string;

  constructor() {
    this.ubicacionId = 0;
    this.direccion = "";
    this.latitud = 0;
    this.longitud = 0;
    this.referencia = "";
  }
}
