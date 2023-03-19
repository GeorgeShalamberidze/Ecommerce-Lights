import React, { useEffect, useState, useContext } from "react";
import { Footer, Header, HeroBanner, Product } from "../components";
import { client } from "../../lib/client";
import { GetServerSideProps, GetStaticProps } from "next";
import { ProductContext } from "@/context/ProductContext";
import IProduct from "@/interfaces/Product";
import Head from "next/head";

const Home = ({ children, title }: { children: any; title: string }) => {
  const contextData = useContext(ProductContext);
  const { products, categories } = contextData;

  console.log("Home: ", products, categories);

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{title ? title + " Lights.ge" : "Lights.ge"}</title>
      </Head>
      <Header />
      <main className="main-container">
        <HeroBanner />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mx-16">
          {products.map((prod: IProduct) => {
            return <Product product={prod} key={prod.id} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const lightsQuery = '*[_type == "lights"]';

  const products = await client.fetch(productQuery);
  const lights = await client.fetch(lightsQuery);

  return {
    props: { products, lights },
  };
};

export default Home;
