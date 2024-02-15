import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      address,
      password,
      phone,
      answer,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        data
      );
      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/login");
      } else {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <section className="form-container">
        <div>
          <form onSubmit={handleSubmit}>
            <h4 className="title">Register Page</h4>
            <div className="mb-3">
              <input
                value={name}
                placeholder="Please enter your name"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={email}
                placeholder="Please enter your email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div className="mb-3">
              <input
                value={password}
                placeholder="Please enter your password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={phone}
                placeholder="Please enter your Phone number"
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={address}
                placeholder="Please enter your Address"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={answer}
                placeholder="What is your favourite sports"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              REGISTER
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
