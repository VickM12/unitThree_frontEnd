import React from "react";
import "./NavBar.css";

function NavBar(props) {

  let navBarItems = [
    <li key={1}>
      <a href="/music">Music</a>
    </li>,
  ];
  if (props.isLoggedIn) {
    navBarItems.push(
      <li key={2}>
        <a href="/logout">Log Out</a>
      </li>
    );
  }if (props.isLoggedIn) {
    navBarItems.push(
      <li key={3}>
        <a href="/spoofycreate">Add to Favorites</a>
      </li>
    );
  }
  else {
    navBarItems.push(
      <li key={4}>
        <a href="/signup">Sign Up</a>
      </li>
    );
    navBarItems.push(
      <li key={5}>
        <a href="/users/login">Log In</a>
      </li>
    );
  }

  return (
    <div>
      <h1 className="mainHeader">Spoofy</h1>
      <nav className="navBarItems">
         <h2>{navBarItems}</h2>
      </nav>
    </div>
  );
}

export default NavBar;
