import React from "react";
import Link from "next/link";
import IProduct from "@/interfaces/Product";
import Image from "next/image";

const ProductII = ({ product }: { product: IProduct }) => {
  return (
    <div className="bord shadow border-red-200 mb-20">
      <Link href={`/product/${encodeURIComponent(product.slug)}`}>
        <Image
          src={product.imgUrl}
          alt={product.name}
          className="w-full"
          width={1000}
          height={1000}
        />
      </Link>

      <div className="flex flex-col p-1 ">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-xs text-center text-gray-500 font-semibold">
            {product.name}
          </h2>
        </Link>
        <p className="text-sm ">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductII;
