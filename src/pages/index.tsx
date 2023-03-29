import React from "react";
import { client } from "../../lib/client";
import { GetServerSideProps, GetStaticProps } from "next";
import Layout from "@/components/Layout";
import ProductsSection from "@/components/ProductsSection";
import { HeroBanner } from "@/components";

const Home = () => {
  return (
    <Layout title="Home Page">
      <HeroBanner />
      <ProductsSection />
    </Layout>
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
