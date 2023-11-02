import React from "react";
import "../style/Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="main-regis">
      <div className="left-regis">
        <img src="/images/barbecue-1.png" />
      </div>
      <div className="right-regis">
        <div className="right-regis-child">
          <div className="regis-title">
            <h2>Let's Get Started!</h2>
            <p>Create new account to access all features.</p>
          </div>
          <div className="regis-input">
            <span>
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </span>
            <span>
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Enter Email Adress"
              />
            </span>
            <span>
              <label for="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="08xxxxxxxxxxx"
              />
            </span>
            <span>
              <label for="exampleFormControlInput1" className="form-label">
                Create New Password
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Create New Password"
              />
            </span>
            <span>
              <label for="exampleFormControlInput1" className="form-label">
                New Password
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="New Password"
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
          <button type="button" className="btn btn-warning">Warning</button>
          <p className="text-center">Already have account? <Link to="/login">
          <span className="text-warning">Log in Here</span>
          </Link></p>
        </div>
      </div>
    </section>
  );
}

export default Register;
