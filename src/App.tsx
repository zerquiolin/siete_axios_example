import React, { useEffect, useState } from "react";

// Component
import ProductCard from "./View/Components/ProductCard";

// Axios
import { fetchAllProducts } from "./Controller/ProductController";

// Style
import "./Util/Sass/App.scss";

// Interfaces
import { IProduct } from "./Util/Interfaces";

function App() {
  // handlers
  const updateProductListHandler = async () => {
    const response = await fetchAllProducts();
    const data = await response.data;
    setProductList(await data);
  };
  // useState
  const [productList, setProductList] = useState<Array<IProduct>>([
    {
      IdProducto: 0,
      NombreProducto: "Default Name",
      PrecioCompra: 0,
      Iva: false,
      PrecioVenta: 0,
      Imagen: "",
      IdMarca: 0,
      Cantidad: 0,
    },
  ]);
  // useEffect
  useEffect(() => {
    updateProductListHandler();
  }, []);

  return (
    <div className="App">
      {productList.map((product) => (
        <ProductCard
          title={product.NombreProducto}
          precio={product.PrecioVenta}
          cantidad={product.Cantidad}
        />
      ))}
    </div>
  );
}

export default App;
