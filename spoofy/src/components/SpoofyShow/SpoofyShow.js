import React from "react";
import "./SpoofyShow.css";

function SpoofyShow(props) {
  const { username, artist, track, image, } = props.spoofy;
  return (
    <div className="spoofy-preview">
      <img src={image} alt={artist} className="spoofy-image" />
      <h3>{}</h3>
      {props.isLoggedIn ? <h4> {username} </h4> : ""}
      {props.isLoggedIn ? <h4> {artist} </h4> : ""}
      {props.isLoggedIn ? <h4> {track} </h4> : ""}
      {props.isLoggedIn ? <h4> {image} </h4> : ""}
    </div>
  );
};

export default SpoofyShow;
