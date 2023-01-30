import { Pedido_ProductoModel } from "./pedidoproducto.model";
import { Ubicacion_PedidoModel } from "./ubicacionpedido.model";

export class PedidosModel {
  pedidoId: number;
  fechaPedido: Date;
  fechaEntrega: Date;
  total: number;
  estadoId: number;
  clienteId: number;
  ubicacionId: number;
  pedido_Productos: Pedido_ProductoModel[];
  ubicacion_Pedido: Ubicacion_PedidoModel;
  
  constructor() {
    this.pedidoId = 0;
    this.fechaPedido = new Date(Date.now());
    this.fechaEntrega = new Date();
    this.total = 0;
    this.estadoId = 1;
    this.clienteId = 0;
    this.ubicacionId = 0;
    this.ubicacion_Pedido = new Ubicacion_PedidoModel();
    this.pedido_Productos = [];
  }
}
