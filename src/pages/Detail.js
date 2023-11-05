import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import { Link, useNavigate } from "react-router-dom";

import "../style/Detail.css";

function Detail() {
  const { id } = useParams();
  const [detailRecipe, setDetailRecipe] = useState(null);
  const [comment, setComment] = useState({});
  const [ingreds, setIngreds] = useState([]);

  const [nickName, setNickName] = useState(null);
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

  //get profile comment from local host
  const getProfile = () => {
  if (localStorage.getItem("token") && localStorage.getItem("profile")) {
      const data = JSON.parse(localStorage.getItem("profile"));
      
      setNickName(data[0].username);
    };
  }


 
  // post comment
  const pushComment = async () => {
    if (localStorage.getItem("token") && localStorage.getItem("profile")) {
      setIsLoading(true);
      axios
        .post(`https://98c4-103-144-170-9.ngrok-free.app/comment`, {
          recipe_id: id,
          username: nickName,
          photo_profile:
            "https://i.pinimg.com/564x/9f/a5/98/9fa598830ffc1e8ae304064fcb781e31.jpg",
          message: message,
        })
        .then((respon) => {})
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          setIsLoading(false);
        });
    } else {
      alert("please login, before send comment");
    }
  };

  React.useEffect(() => {
    handleGetApi();
    getProfile();
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
