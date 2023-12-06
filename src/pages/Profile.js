import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";
import axios from "axios";

import "../style/Profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setuserProfile] = useState({});

  const getData = () => {
    if (localStorage.getItem("token") && localStorage.getItem("profile")) {
      setIsLoading(true);
      axios
        .get("https://pijar-food-be.cyclic.app/users/me", {
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

  // get token
  const jwtToken = localStorage.getItem("token");

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div id="profileSection">
      <Navbar />
      <div className="profileBody container">
        <div className="editProfile">
          <Link to={"/edit-profile"}>
            <button className="editProfileBtn">edit profile</button>
          </Link>
        </div>
        <div className="fotoProfile">
          <img src={userProfile.photo_profile}></img>
          <h5>{userProfile.username}</h5>
        </div>
        <div className="recipeBar">
          <div className="myRecipe">My Recipe</div>
          <div>Saved Recipe</div>
          <div>Linked Recipe</div>
        </div>
        <hr></hr>
        <div className="foodContent">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
