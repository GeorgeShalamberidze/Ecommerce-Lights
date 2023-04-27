import { useStateContext } from "@/context/ProductContext";
import IProduct from "@/interfaces/Product";
import React from "react";
import Product from "./Product";

const ProductsSection = () => {
  const { products } = useStateContext();

  return (
    <div className="mt-20">
      <h1 className="flex text-center justify-center my-16 font-bold text-3xl">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mx-14 my-8">
        {products.map((prod: IProduct) => {
          return <Product product={prod} key={prod.slug} />;
        })}
      </div>
    </div>
  );
};

export default ProductsSection;
