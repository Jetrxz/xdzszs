export class ClienteModel {
  clienteId: number;
  nombres: string;
  apellidos: string;
  celular: number;
  usuario: string;
  contrasena: string;

  constructor() {
    this.clienteId = 0;
    this.nombres = "";
    this.apellidos = "";
    this.celular = 0;
    this.usuario = "";
    this.contrasena = "";
  }
}
