import React from "react";
import "./SpoofyShow.css";

function SpoofyShow(props) {
  const { title, imageUrl, genre, time, } = props.spoofy;
  return (
    <div className="spoofy-preview">
      <img src={imageUrl} alt={title} className="spoofy-image" />
      <h3>{}</h3>
      {props.isLoggedIn ? <h4> {title}</h4> : ""}
      {props.isLoggedIn ? <h4> {imageUrl}</h4> : ""}
      {props.isLoggedIn ? <h4> {time}</h4> : ""}
      {props.isLoggedIn ? <h4> {genre}</h4> : ""}
    </div>
  );
}

export default SpoofyShow;
