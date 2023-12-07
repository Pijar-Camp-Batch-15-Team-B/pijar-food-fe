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
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [userProfile, setuserProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);

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

  const getData = async () => {
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

  console.log(userProfile)
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <section id="editProfile">
      <Navbar />
      <div className="Body">
        <div className="formEdit">
          <p>Update Your Profile</p>
          <div className="editFotoParent">
            <img className="iconEdit" src="/images/icon-edit.png"></img>
            <div>
              <img className="editFoto" src={userProfile.photo_profile}></img>
            </div>
          </div>
          <label>Fullname</label>
          <input
            placeholder="Fullname"
            onChange={(value) => {
              setNewUsername(value.target.value);
            }}
          ></input>
          <hr></hr>
          <label>Email</label>
          <input
            placeholder="Email"
            onChange={(value) => {
              setEmail(value.target.value);
            }}
          ></input>
          <label>Phone Number</label>
          <input
            placeholder="Phone Number"
            onChange={(value) => {
              setPhoneNumber(value.target.value);
            }}
          ></input>
          <div>
            <button onClick={() => handleUpdate()}>Save</button>
          </div>
          {/* <div className="flexContent">
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
          <button onClick={() => handleUpdate()}>Edit</button> */}
        </div>
      </div>
      <Footer />
    </section>
  );
}
