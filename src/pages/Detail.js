import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import { Link } from "react-router-dom";

import "../style/Detail.css";

function Detail() {
  const { id } = useParams();
  console.log("testid", id);
  const [detailRecipe, setDetailRecipe] = useState(null);

  // lifecycle
  const handleGetApi = async () => {
    try {
      // Recipe Detail
      const requestDetail = await axios.get(
        `https://eb14-2001-448a-3032-143f-689b-53c3-8d16-e14b.ngrok-free.app/recipe/${id}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (requestDetail.data.data.length > 0) {
        setDetailRecipe(requestDetail.data.data[0]);
      }
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  React.useEffect(() => {
    handleGetApi();
  }, []);

  return (
    <div id="recipeDetail">
      <Navbar />
      {detailRecipe !== null ? (
        <section id="bodyDetail">
          <h1 className="pt-5 text-center">{detailRecipe.title}</h1>
          <div className="d-flex justify-content-center">
            <div className="gambardetail">
              <img src={detailRecipe.image} alt="foodImage"></img>
            </div>
          </div>
          <div id="detailIngredients" className="container">
            <h4 className="mb-4">Ingredient</h4>
            <ul className="mb-5">
              <li>{detailRecipe.ingridients}</li>
            </ul>
          </div>
          <div id="videoStep" className="container">
            <h4 className="margin">Video Step</h4>
            <Link to={detailRecipe.video_url}>
              <button className="videoBtn">
                <div className="d-flex align-item-center justify-content-center">
                  <img src="/images/play.png" alt="playIcon"></img>
                </div>
              </button>
            </Link>
          </div>
        </section>
      ) : null}

      {/* Comment Section */}

      <div className="body-comment">
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
      <Footer />
    </div>
      </div>
  );
}

export default Detail;
