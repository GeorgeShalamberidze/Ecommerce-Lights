import React from 'react';
import { Footer, Header } from "../components/index";
import { client } from "../../lib/client";

const Home = () => {
  return (
    <>
      <Header />
      <div>Home</div>
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const lightsQuery = '*[_type == "lights"]';

  const products = await client.fetch(productQuery);
  const lights = await client.fetch(lightsQuery);

  return {
    props: { products, lights }
  }
}

export default Home