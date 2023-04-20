import React, { useState } from "react";
import Link from "next/link";
import IProduct from "@/interfaces/Product";
import { useStateContext } from "@/context/ProductContext";

const Product = ({ product }: { product: IProduct }) => {
  const [imgUrl, setImgUrl] = useState(product?.imgUrl);
  const { onAddToCart } = useStateContext();

  const handleMouseOver = () => {
    setImgUrl(product?.images[1]?.imgUrl);
  };

  const handleMouseOut = () => {
    setImgUrl(product?.imgUrl);
  };

  return (
    <div className="card">
      <Link href={`/product/${encodeURIComponent(product.slug)}`}>
        <img
          src={imgUrl}
          alt={product.name}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="rounded shadow w-full"
        />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg text-center max-w-sm">{product.name}</h2>
        </Link>
        <p>${product.price}</p>
        <button
          className="primary-button cursor-pointer text-cyan-50"
          type="button"
          onClick={() => onAddToCart(product, 1)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
