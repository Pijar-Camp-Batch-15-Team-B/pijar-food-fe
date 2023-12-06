import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../style/EditProfile.css";

export default function EditProfile() {
  const navigate = useNavigate();
  const [newUsername, setNewUsername] = useState();
  const [newProfile, setNewProfile] = useState();

  const jwtToken = localStorage.getItem("token");

  const handleUpdate = async () => {
    try {
      const result = await axios.put(
        "https://pijar-food-be.cyclic.app/users/edit",

        {
          username: newUsername,
          photo_profile: newProfile,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      if (result.status === 200) {
        setTimeout(() => {
          navigate("/profile");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="editProfile">
      <Navbar />
      <div className="Body">
        <div className="formEdit">
          <div className="flexContent">
            <input
              onChange={(value) => {
                setNewProfile(value.target.value);
              }}
            ></input>
            <p>Link Profile baru</p>
          </div>
          <div className="flexContent">
            <input
              onChange={(value) => {
                setNewUsername(value.target.value);
              }}
            ></input>
            <p>Nama baru</p>
          </div>
          <button onClick={() => handleUpdate()}>Edit</button>
        </div>
      </div>
      <Footer />
    </section>
  );
}
