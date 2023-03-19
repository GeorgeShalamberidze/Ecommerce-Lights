import React from "react";
import Link from "next/link";
import IProduct from "@/interfaces/Product";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.imgUrl}
          alt={product.name}
          className="rounded shadow w-full"
        />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg text-center">{product.name}</h2>
        </Link>
        <p>${product.price}</p>
        <button
          className="primary-button cursor-pointer text-cyan-50"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
