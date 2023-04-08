import React from "react";
import { useState, useEffect } from "react";
import { ProductsList } from "../components/productslist";
import Axios from "axios";
export const TrueHome = () => {
  //Creando mi estado
  const [products, setProducts] = useState([]);
  //Estado para modificar en caso de electro
  // const [productsElectro, setProductsElectro]= useState([])
  //Traer cosas

  //Agregar algo, hacer algo cuando se cargue
  useEffect(() => {
    Axios.get("https://api-to-vercel-olive.vercel.app/api/productos").then(
      (response) => {
        const productos = response.data;
        console.log(productos);
        setProducts(response.data);
        console.log(response.data);
      }
    );
  }, []);

  return (
    <div className="bg-fondoEpic ">
      <ProductsList products={products} />
    </div>
  );
};

export default TrueHome;
