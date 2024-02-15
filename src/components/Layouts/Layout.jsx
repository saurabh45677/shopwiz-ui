import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container" style={{ minHeight: "70vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
