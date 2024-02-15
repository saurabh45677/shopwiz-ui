import React from "react";
import Layout from "../components/Layouts/Layout";
import { useSearch } from "../context/Search";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} Products`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((product) => (
              <div
                className="card m-2"
                style={{
                  width: "18rem",
                  height: "20rem",
                  overflow: "hidden",
                }}
                key={product._id}
              >
                <img
                  style={{
                    width: "100%",
                    maxHeight: "40%",
                    objectFit: "contain",
                    objectPosition: "center",
                    padding: "10px",
                  }}
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    {product.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-primary ms-1">More Details</button>
                  <button className="btn btn-secondary ms-1">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
