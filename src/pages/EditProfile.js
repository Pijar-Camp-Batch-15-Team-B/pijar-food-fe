import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../style/EditProfile.css";

export default function EditProfile() {
  const navigate = useNavigate();
  const [newUsername, setNewUsername] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [userProfile, setuserProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [newPhotoProfile, setnewPhotoProfile] = useState(false);

  const jwtToken = localStorage.getItem("token");

  const handleUpdatePhotoProfile = async () => {
    try {
      // const form = new FormData()
      // form.append('photo_profile', newPhotoProfile)

      // axios
      // .post(`https://pijar-food-be-fawn.vercel.app/user/edit/photo`, newPhotoProfile, {
      //   headers: {
      //     Authorization: `Bearer ${jwtToken}`,
      //     'Content-Type': 'multipart/form-data'
      //   }
      // })

console.log(newPhotoProfile)

      // axios.post(
      //   "https://pijar-food-be-fawn.vercel.app/user/edit/photo",
      //   {
      //     photo_profile: newPhotoProfile,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${jwtToken}`,
      //     },
      //   }
      // );
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const result = await axios.put(
        "https://pijar-food-be-fawn.vercel.app/users/edit",

        {
          username: newUsername,
          phone_number: phoneNumber,
          email: email,
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
        .get("https://pijar-food-be-fawn.vercel.app/users/me", {
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

  console.log(userProfile);
  React.useEffect(() => {
    // getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="editProfile">
      <Navbar />
      <div className="Body">
        <div className="formEdit">
          <p>Update Your Profile</p>
          <div className="editFotoParent">
            <label>Photo Profile</label>
            <input
              type="file"
              placeholder="Input Your Image"
              onChange={(value) => {

                setnewPhotoProfile(value.target.files[0]);
              }}
            ></input>
            <button onClick={handleUpdatePhotoProfile()}>Save</button>
          </div>
          <hr></hr>
          <label>Fullname</label>
          <input
            placeholder="Fullname"
            onChange={(value) => {
              setNewUsername(value.target.value);
            }}
          ></input>
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
          
        </div>
      </div>
      <Footer />
    </section>
  );
}
