import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Comment from "../components/Comment";

import "../style/Detail.css";

function Detail() {
  return (
    <div id="recipeDetail">
      <Navbar />
      <section id="bodyDetail">
        <h1 className="pt-5 text-center">Loream Sandwich</h1>
        <div className="d-flex justify-content-center">
          <div className="gambardetail">
            <img src="/images/sandwich_telur.jpg" alt="foodImage"></img>
          </div>
        </div>
        <div id="detailIngredients" className="container">
          <h4 className="mb-4">Ingredient</h4>
          <ul className="mb-5">
            <li>2 egg</li>
            <li>2 egg</li>
            <li>2 egg</li>
            <li>2 egg</li>
            <li>2 egg</li>
            <li>2 egg</li>
          </ul>
        </div>
        <div id="videoStep" className="container">
          <h4 className="margin">Video Step</h4>
          <button className="videoBtn">
            <div className="d-flex align-item-center justify-content-center">
              <img src="/images/play.png" alt="playIcon"></img>
            </div>
          </button>
        </div>
        <div
          id="detailInputComment"
          className="container d-flex justify-content-center"
        >
          <input placeholder="Comment :"></input>
          <button className="sendCommentBtn">Send</button>
        </div>
        <div id="commentDisplay" className="container mt-5 mb-5">
          <h4>Comment</h4>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Detail;
