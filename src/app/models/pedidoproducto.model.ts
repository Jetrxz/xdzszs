export class PedidoProductoModel {
  pedidoProductoId: number;
  cantidad: number;
  totalProducto: number;
  pedidoId: number;
  productoId: number;

  constructor() {
    this.pedidoProductoId = 0;
    this.cantidad = 0;
    this.totalProducto = 0;
    this.pedidoId = 0;
    this.productoId = 0;
  }
}
