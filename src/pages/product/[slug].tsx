import Layout from "@/components/Layout";
import IProduct from "@/interfaces/Product";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import data from "../../../public/data/products";
import { BiError } from "react-icons/bi";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { ProductContext } from "@/context/ProductContext";
import { ProductII } from "@/components";

const ProductDetails = () => {
  const [index, setIndex] = useState(0);
  const { query } = useRouter();
  const { slug } = query;
  const contextData = useContext(ProductContext);
  const { products, categories } = contextData;

  const product = data.find((x) => x.slug === slug);

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

  const handleOnClick = () => {};
  const handleAddToCartClick = () => {};
  const handleBuyNowClick = () => {};

  return (
    <Layout title={`${product.name} - Light.ge`}>
      <div className="mx-20 mt-16 mb-4">
        <Link href="/" className="flex text-center items-center">
          <IoIosArrowRoundBack size={20} />
          <span>back to home page</span>
        </Link>
      </div>
      <div className="flex">
        <div className="images-wrapper">
          <div className="main-img-container">
            <img
              src={product.images[index].imgUrl}
              alt="products"
              className="object-contain w-full h-96"
            ></img>
          </div>
          <div className="small-images-container flex mt-5 gap-4 mx-20">
            {product.images.map((item: { imgUrl: string }, i: number) => (
              <img
                src={item.imgUrl}
                alt="product-description"
                onClick={() => setIndex(i)}
                className={
                  i === index
                    ? "small-image active: border-l-rose-500"
                    : "small-image"
                }
              />
            ))}
          </div>
        </div>

        <div className="product-details-desc">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="reviews flex items-center mb-5">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <div className="details mb-3">
            <h4 className="font-bold text-lg">Details: </h4>
            <p className="text-gray-500 font-semibold">
              Best LED In the World!
            </p>
          </div>
          <p className="price text-xl font-bold mb-5">${product.price}</p>
          <div className="quantity flex items-center mb-10">
            <h3 className="mr-5 font-bold text-xl">Quantity: </h3>
            <p className="quantity-desc flex gap-5 border-2 p-1 items-center">
              <span
                className="minus cursor-pointer border-r-2 px-3"
                onClick={handleOnClick}
              >
                <AiOutlineMinus size={30} />
              </span>

              <span className="num font-bold text-lg" onClick={handleOnClick}>
                0
              </span>

              <span
                className="plus cursor-pointer border-l-2 px-3"
                onClick={handleOnClick}
              >
                <AiOutlinePlus size={30} />
              </span>
            </p>
          </div>
          <div className="buttons flex gap-14">
            <button
              type="button"
              className="add-to-cart primary-button cursor-pointer text-cyan-50  w-2/3"
              onClick={handleAddToCartClick}
            >
              Add to Cart
            </button>

            <button
              type="button"
              className="buy-now primary-button cursor-pointer text-cyan-50 w-2/3"
              onClick={handleBuyNowClick}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center font-bold text-2xl mt-16 flex-col">
        <h2 className="mb-16">You may also like</h2>
        <div className="marquee flex relative overflow-x-hidden">
          <div className="flex flex-row gap-4 animate-marquee whitespace-nowrap">
            {products.map((item: IProduct, i: number) => {
              return <ProductII product={item} key={i} />;
            })}
          </div>

          <div className="flex flex-row gap-4 absolute top-0 animate-marquee2 whitespace-nowrap pl-3">
            {products.map((item: IProduct, i: number) => {
              return <ProductII product={item} key={i} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
