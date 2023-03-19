import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, children }: { title: string; children: any }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{title ? title + " Lights.ge" : "Lights.ge"}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <main className="main-container"> {children}</main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
