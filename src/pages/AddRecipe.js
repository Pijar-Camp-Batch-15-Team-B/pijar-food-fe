import React, { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../style/AddRecipe.css";

export default function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingridients, setIngridients] = useState("");
  const [image, setImage] = useState("");
  const [video_url, setVideo_url] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const postRecipe = async () => {
    setIsLoading(true);

    axios
      .post("https://pijar-food-be-fawn.vercel.app/recipe", {
        title: title,
        ingridients: ingridients,
        image: image,
        video_url: video_url,
      })
      .then((respon) => {
        alert("Data berhasil ditambahkan");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="addRecipe">
      <Navbar />
      <section className="container addRecipeBody">
        <input
          className="addPict"
          placeholder="Add Photo"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        ></input>
        <input
          className="addTitle"
          placeholder="Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <input
          className="addIngredient"
          placeholder="Ingredients"
          onChange={(event) => {
            setIngridients(event.target.value);
          }}
        ></input>
        <input
          className="addVideo"
          placeholder="Video"
          onChange={(event) => {
            setVideo_url(event.target.value);
          }}
        ></input>
        <button onClick={postRecipe} disabled={isLoading}>
          {isLoading ? "Loading..." : "Add Recipe"}
        </button>
      </section>
      <Footer />
    </div>
  );
}
