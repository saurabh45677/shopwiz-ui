import React from "react";
import Layout from "../components/Layouts/Layout";
import aboutus from "../images/about.jpeg";

const About = () => {
  return (
    <Layout>
      <div className="row aboutus">
        <div className="col-md-6">
          <img src={aboutus} alt="aboutus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-6">
          <p className="about-para">
            Welcome to Shop Wiz We're passionate about delivering a seamless
            shopping experience, providing an extensive selection of products
            ranging from the latest fashion trends to cutting-edge electronics
            and unique home decor. Established in 2019, our journey began with a
            simple mission: to make online shopping convenient, enjoyable, and
            accessible to everyone, regardless of location or budget. Over the
            years, we've evolved into a trusted online marketplace, serving
            customers worldwide. Our commitment to integrity, quality, and
            customer satisfaction drives everything we do. We work tirelessly to
            ensure that every item meets our rigorous standards, sourcing
            products from reputable suppliers and brands. Whether you have a
            question about an order or need assistance with returns, our
            dedicated customer support team is here to help. Your satisfaction
            is our priority, and we're here to make your shopping experience
            exceptional.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
