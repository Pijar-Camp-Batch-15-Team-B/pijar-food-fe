/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setuserProfile] = useState({});
  const jwtToken = localStorage.getItem("token");

  const [profile, setProfile] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  const handleLogout = () => {
    localStorage.removeItem("profile");
    window.location.reload();
  };

  const getData = () => {
    if (localStorage.getItem("token") && localStorage.getItem("profile")) {
      setIsLoading(true);
      axios
        .get("https://pijar-food-be-fawn.vercel.app/users/me", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((respon) => {
          const result = respon.data.data[0];
          setuserProfile(result);
        })
        .catch((error) => {
          console.log(`Get data gagal, error : ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
    }
  };

  React.useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="header-container">
        <header className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse text-center "
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                  <li className="nav-item nav-text">
                    <Link className="nav-link" to="/">
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="nav-item nav-text">
                    <Link className="nav-link" to="/add-recipe">
                      <p>Add Recipe</p>
                    </Link>
                  </li>
                  <li className="nav-item nav-text">
                    <Link className="nav-link" to="/profile">
                      <p>Profile</p>
                    </Link>
                  </li>
                </ul>
                {profile ? (
                  <div className="logout">
                    <button
                      className="btn btn-warning"
                      style={{ marginRight: "10px" }}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                    <img
                      src={userProfile.photo_profile}
                      width="50px"
                      height="50px"
                      alt="profile"
                      style={{ background: "#e1e1e1", borderRadius: "50%" }}
                    />
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-login btn-warning" type="submit">
                      Log In
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Navbar;
