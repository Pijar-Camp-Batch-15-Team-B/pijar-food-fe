import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import "../style/Home.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [popularRec, setPopularRecipe] = useState([]);
  const [newRec, setNewRecipe] = useState([]);

  const handleGetResponse = async () => {
    try {
       // Popular Recipe
       const popularRecipe = await axios.get(
        "https://98c4-103-144-170-9.ngrok-free.app/latestRecipe",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
  
      if (popularRecipe.status === 200) {
        setPopularRecipe(popularRecipe.data.data);
        console.log('data', popularRecipe.data.data)
      }
  
      // New Recipe
      const newRecipe = await axios.get (
        "https://98c4-103-144-170-9.ngrok-free.app/newRecipe",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (newRecipe.status === 200) {
        setNewRecipe(newRecipe.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(popularRec)
  
  React.useEffect(() => {
    handleGetResponse();
  }, []);
  return (
    <>
      {/* Header Part */}
      <div className="main-box">
        <Navbar />
        <nav className="nav-box">
          <div
            className="hero-left"
          >
            <h1>
              Discover Recipe <br /> & Delicious Food
            </h1>
            <div className="hero-input">
              <BsSearch />
              <input type="text" placeholder="Search Recipe"></input>
            </div>
          </div>
          <div className="hero-right">
            <img src="/images/food-hero.png" />
          </div>
        </nav>
      </div>

      {/* Popular */}
      <section className="popular-box">
        <div className="title-head">
          <span className="orange-vertical"></span>
          <p>Popular For You !</p>
        </div>
        <div className="popular-img">
          <div className="inner-text">
            <p>Pizza Lamoa</p>
            <img src="/images/pizza.png" />
          </div>
          <div className="inner-text">
            <p>King Burger</p>
            <img src="/images/kingburger.png" />
          </div>
        </div>
      </section>

      {/* New Recipe */}
      <section className="recipe-box">
        <div className="title-head">
          <span className="orange-vertical"></span>
          <p>New Recipe</p>
        </div>
        {newRec.map((item) => (
          <div className="recipe-img row align-items-center">
          <div className="recipe-left col-md-6">
            <div className="recipe-left-img">
              <img src={item.image} />
            </div>
            <div className="recipe-orange"></div>
          </div>
          <div className="recipe-right col-md-6">
            <h1>
              {item.title}
            </h1>
            <hr />
            <p>
            Would you like to learn how to make it? <br/> You can access a more detailed version of this recipe, <br/> which includes step-by-step instructions.
            </p>
            <Link to={`/detail/${item.id}`}>
            <button type="button" className="btn btn-warning text-white">
              Learn More
            </button>
            </Link>
          </div>
        </div>
        ))}
        
      </section>
      {/* Popular Recipe */}
      <div className="popular-recipe">
        <div className="title-head">
          <span className="orange-vertical"></span>
          <p>Popular Recipe</p>
        </div>

        
        <div className="menu-box">
          {popularRec.slice(0, 6).map((item) => (
            <Link to={`/detail/${item.id}`}>
            <Popular
            title={item.title}
            image={item.image}
            />            
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
