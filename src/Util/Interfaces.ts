export type ProductProps = {
  title: string;
  precio: number;
  cantidad: number;
};

export type IProduct = {
  IdProducto: number;
  NombreProducto: string;
  PrecioCompra: number;
  Iva: boolean;
  PrecioVenta: number;
  Imagen: any;
  IdMarca: number;
  Cantidad: number;
};
