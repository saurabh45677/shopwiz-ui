import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      answer,
      newPassword,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
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
            <h4 className="title">Reset Password</h4>

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
                value={answer}
                placeholder="Please enter your favourite Sport"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                required
              />
            </div>

            <div className="mb-3">
              <input
                value={newPassword}
                placeholder="Please enter your Newpassword"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForgotPassword;
