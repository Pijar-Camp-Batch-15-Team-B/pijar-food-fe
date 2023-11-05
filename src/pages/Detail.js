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
  const [detailRecipe, setDetailRecipe] = useState(null);
  const [comment, setComment] = useState({});
  const [ingreds, setIngreds] = useState([]);

  // const [username, setUsername] = useState("");
  // const [recipe_id, setRecipe_id] = useState("");
  // const [photo_profile, setPhoto_profile] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // lifecycle
  const handleGetApi = async () => {
    try {
      // Recipe Detail
      const requestDetail = await axios.get(
        `https://98c4-103-144-170-9.ngrok-free.app/recipe/${id}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (requestDetail.data.data.length > 0) {
        setDetailRecipe(requestDetail.data.data[0]);
        setIngreds(requestDetail.data.data[0].ingridients.split(","));
      }

      //get comment
      const getComment = await axios.get(
        `https://98c4-103-144-170-9.ngrok-free.app/recipe/comment/${id}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (getComment.data.data.length > 0) {
        setComment(getComment.data.data[0]);
      }
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  // post comment
  const pushComment = async () => {
    setIsLoading(true);
    axios
      .post(
        `https://98c4-103-144-170-9.ngrok-free.app/comment`,
        {
          recipe_id: id,
          username: "Aji",
          photo_profile: "https://i.pinimg.com/564x/9f/a5/98/9fa598830ffc1e8ae304064fcb781e31.jpg",
          message: message,
        }
      )
      .then((respon) => {
        // console.log("berhasil");
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          window.location.reload()
        }, 2000);
        setIsLoading(false);
      });
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
              {ingreds.map((item) => (
                <li>{item}</li>
              ))}
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
          <input
            placeholder="Comment :"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></input>
          <button
            className="sendCommentBtn"
            onClick={pushComment}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Send"}
          </button>
        </div>
        <div id="commentDisplay" className="container mt-5 mb-5">
          <h4>Comment</h4>
          <Comment
            message={comment.message}
            username={comment.username}
            photo_profile={comment.photo_profile}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Detail;
