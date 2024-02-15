import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [relatedproducts, setRelatedproducts] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/single-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get similar products

  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
      );

      setRelatedproducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            style={{
              objectFit: "contain",
              objectPosition: "center",
              padding: "10px",
            }}
            height={300}
            width={300}
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product?.name}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product Deatails</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Category: {product.category?.name}</h6>
          <h6>Price: {product.price}</h6>
          {/* <button className="btn btn-secondary ms-1">Add to cart</button> */}
        </div>
      </div>
      <hr />
      {relatedproducts.length > 0 ? (
        <div className="row container">
          <h6 className="text-center mt-4">Similar Products</h6>
          <div className="d-flex flex-wrap text-center">
            {relatedproducts?.map((product) => (
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
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${product.slug}`)}
                  >
                    More Details
                  </button>
                  {/* <button className="btn btn-secondary ms-1">
                    Add to cart
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h6 className="text-center">No Similar products found</h6>
      )}
    </Layout>
  );
};

export default ProductDetails;
