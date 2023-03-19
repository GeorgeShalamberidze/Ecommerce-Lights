import Layout from "@/components/Layout";
import IProduct from "@/interfaces/Product";
import { useRouter } from "next/router";
import React from "react";
import data from "../../../public/data/products";
import { BiError } from "react-icons/bi";

const ProductDetails = () => {
  const { query } = useRouter();
  const { slug } = query;

  const product: IProduct = data.find((x) => x.slug === slug);
  const { id, name, price, reviewCount, imgUrl } = product;

  if (!product) {
    return (
      <Layout title="Error - Product Not Found">
        <div className="flex items-center justify-center text-4xl gap-x-5">
          <BiError size={50} />
          <h1>Product Not Found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${name} - Light.ge`}>
      <div className="flex flex-col">
        <div className="img-container">
          <img src={imgUrl} alt="" className="object-contain w-96 h-96" />
        </div>
        <div className="small-images-container">{}</div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
