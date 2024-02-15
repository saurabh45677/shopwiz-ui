import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AdminMenu from "../../components/Layouts/AdminMenu";
import Layout from "../../components/Layouts/Layout";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );

      if (data?.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while getting products", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

 

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 ">
            <h1 className="text-center">ALL Products List </h1>
            <div className="d-flex flex-wrap">
              {products?.map((product) => (
                <Link
                  to={`/dashboard/admin/product/${product.slug}`}
                  key={product._id}
                  className="product-link"
                >
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
                        maxHeight: "60%",
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
                      <p className="card-text">{product.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductsPage;
