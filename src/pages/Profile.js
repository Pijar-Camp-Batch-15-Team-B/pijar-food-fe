import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";

import "../style/Profile.css";

export default function Profile() {
  return (
    <div id="profileSection">
      <Navbar />
      <div className="profileBody container">
        <div className="fotoProfile">
          <img src="/images/myprofile.png"></img>
          <h5>nama kamu</h5>
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
