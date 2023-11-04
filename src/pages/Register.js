import React, { useState, useEffect } from "react";
import "../style/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState (false);
  const [errMsg, setErrMsg] = useState(null);

  React.useEffect(() => {
    if(localStorage.getItem("token") && localStorage.getItem("profile")) {
      navigate("/");
    }
  }, []);

  const handleRegister = () => {
    setIsLoading(true);
    setErrMsg(null)

    axios.post("https://eb14-2001-448a-3032-143f-689b-53c3-8d16-e14b.ngrok-free.app/users/register", {
      username: username,
      email: email,
      phone_number: phoneNumber,
      password: password
    })
    .then(() => {
      setIsSuccess(true);
    })
    .catch((error) => {
      console.log("errrr", error)
      const errUsername = error?.response?.data?.message?.username?.message;
      const errEmail = error?.response?.data?.message?.email?.message;
      const errPhoneNumber = error?.response?.data?.message?.phone_number?.message;
      const errPassword = error?.response?.data?.message?.password?.message;
      setIsSuccess(false);
      setErrMsg(
        errUsername ??
            errEmail ??
            errPhoneNumber ??
            errPassword ??
            "Something wrong in our app"
      );
    })
    .finally(() => {
      setIsLoading(false)
    })
  }



  return (
    <section className="main-regis">
      <div className="left-regis">
        <img src="/images/barbecue-1.png" />
      </div>
      <div className="right-regis">
        <div className="right-regis-child">
        {isSuccess ? (
              <div className="alert alert-success" role="alert">
                <p>Register Account Sucess. Please Check Your Email</p>
              </div>
            ) : null}

            {errMsg ? (
              <div className="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}
          <div className="regis-title">
            <h2>Let's Get Started!</h2>
            <p>Create new account to access all features.</p>
          </div>
          <div className="regis-input">
            <span>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Name"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </span>
            <span>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Enter Email Adress"
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </span>
            <span>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="08xxxxxxxxxxx"
                onChange={(event) => {
                  setPhoneNumber(event.target.value)
                }}
              />
            </span>
            <span>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                New Password
              </label>
              <input
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="New Password"
                onChange={(event) => {
                  setPassword(event.target.value)
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
              <label className="form-check-label" for="defaultCheck1">
                I agree to terms & conditions
              </label>
            </span>
          </div>
          <button onClick={handleRegister} disabled={isLoading} type="button" className="btn btn-warning">{isLoading ? "Loading..." : "Sign In"}</button>
          <p className="text-center">Already have account? <Link to="/login">
          <span className="text-warning">Log in Here</span>
          </Link></p>
        </div>
      </div>
    </section>
  );
}

export default Register;
