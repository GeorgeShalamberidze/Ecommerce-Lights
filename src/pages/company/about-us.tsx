import Layout from "@/components/Layout";
import React from "react";

const AboutUs = () => {
  return (
    <Layout title="About Us">
      <div className="flex text-center justify-center items-center m-20">
        <div className=" max-w-2xl">
          <h1 className="text-3xl font-bold mb-10">About Us</h1>
          <h3>
            <p>
              Founded in 2009, we have delivered expertly designed LED packages
              to hobbyists, scientists, and companies all over the world.
            </p>
            <br />
            <p>
              Since the beginning we have done all of our pcb, heatsink, and
              general design in-house, and have carefully selected suppliers to
              deliver quality made products at great prices. If you think we
              should carry a product that you don't see on the site, have a
              wholesale inquiry, or just have any general comments or questions
              please send an e-mail to gshalamberidze@gmail.com or give us a
              call at +995 577 123 123
            </p>
            <br />
            <p>
              f you'd like to write us/stop by/mail a money order for an order
              our address is:
            </p>
            <br />
            <p>51, Tskneti Highway</p>
            <p>Georgia, Tbilisi 0162</p>
            <br />
            <br />
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
