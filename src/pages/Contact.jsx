import React from "react";
import Layout from "../components/Layouts/Layout";
import image from "../images/contactus.jpeg";
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img src={image} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Fell free to call If you have any query about the product
          </p>

          <p className="mt-3">
            <TfiEmail /> : shopwizsupport@gmail.com
          </p>

          <p className="mt-3">
            <BsFillTelephoneFill /> : 9898989898(24*7)
          </p>

          <p className="mt-3">
            <BiSupport /> : 0000 1234 0101(toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
