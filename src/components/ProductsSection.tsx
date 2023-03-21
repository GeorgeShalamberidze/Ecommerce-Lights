import { useStateContext } from "@/context/ProductContext";
import IProduct from "@/interfaces/Product";
import React from "react";
import Product from "./Product";

const ProductsSection = () => {
  const { products, categories } = useStateContext();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mx-14 my-8">
      {products.map((prod: IProduct) => {
        return <Product product={prod} key={prod.slug} />;
      })}
    </div>
  );
};

export default ProductsSection;
