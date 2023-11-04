import React, { useEffect, useState } from "react";
import "../style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("profile")) {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post(
        "https://eb14-2001-448a-3032-143f-689b-53c3-8d16-e14b.ngrok-free.app/users/login", {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        const token = response?.data?.accessToken;

        localStorage.setItem("token", token);
        setIsSuccess(true);

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        const errEmail = error?.message;
        const errPassword = error?.message;
        setIsSuccess(false);
        setErrMsg(
          errEmail ??
            errPassword ??
            error?.response?.data?.messages ??
            "Something wrong in our app"
        );
        console.log("errrr", error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="main-login">
      <div className="left-login">
        <img src="/images/barbecue-1.png" />
      </div>
      <div className="right-login">
        <div className="right-login-child">
          <div className="login-title">
            <h2>Welcome</h2>
            <p>Login to your exiting account.</p>
          </div>
          {isSuccess ? (
            <div className="alert alert-success" role="alert">
              <p>Login success, please wait for redirect to our app</p>
            </div>
          ) : null}

          {errMsg ? (
            <div className="alert alert-danger" role="alert">
              {errMsg}
            </div>
          ) : null}
          <div className="regis-input">
            <span>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Enter Email Adress"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </span>
            <span>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </span>
            <span className="d-flex gap-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label " htmlFor="defaultCheck1">
                I agree to terms & conditions
              </label>
            </span>
          </div>
          <button
            onClick={handleLogin}
            disabled={isLoading}
            type="button"
            className="btn btn-warning"
          >
            Log In
          </button>
          <p className="text-center">
            Don't have an account ?{" "}
            <Link to="/register">
              <span className="text-warning">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
