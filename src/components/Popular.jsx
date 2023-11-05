import React from "react";
import "../style/Home.css";

function Popular(props) {
  const { title, image } = props;
  return (
    <div className="menu-child">
      <p>{title}</p>
      <img src={image} />
    </div>
  );
}

export default Popular;
