import React from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";

const PagenotFound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page not found</h2>
        <Link className="go-back" to="/">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PagenotFound;
