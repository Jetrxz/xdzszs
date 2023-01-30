export interface SignUp{
  Nombres:string,
  Apellidos:string,
  Usuario:string,
  Celular:number,
  Contrasena:string,
}

export interface Login{
  Usuario:string,
  Contrasena:string
}
export interface Product {
  productoId: number;
  quantity: number;
  precio: number;
}
