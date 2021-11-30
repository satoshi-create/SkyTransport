import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../main.css";
import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Hero/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
