export class ComprobanteModel {
  descripcion: string;
  codigo: number;
  pedidoId: number;
  tipoComprobanteId: number;

  constructor() {
    this.descripcion = "";
    this.codigo = 0;
    this.pedidoId = 0;
    this.tipoComprobanteId = 0;
  }
}
