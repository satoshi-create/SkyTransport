import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../main.css";
import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar/>
      <Hero/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
