import React, { useEffect, useState } from "react";
import { Footer, Header } from "../components";
import { client } from "../../lib/client";
import { GetServerSideProps, GetStaticProps } from "next";

const Home = (props: GetServerSideProps) => {
  return (
    <>
      <Header />
      <div>Home</div>
      <Footer />
    </>
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
