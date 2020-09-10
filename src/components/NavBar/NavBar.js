import React from "react";
import "./NavBar.css";

function NavBar(props) {

  let navBarItems = [
    <li className="nav" key={1}>
      <a href="/music">Music Search</a>
    </li>,
  ];
  if (props.isLoggedIn) {
    navBarItems.push(
      <li className="nav" key={2}>
        <a href="/logout">Log Out</a>
      </li>
    );
  }
  if (props.isLoggedIn) {
    navBarItems.push(
      <li className="nav" key={3}>
        <a href="/spoofycreate">Add to Favorites</a>
      </li>
    );
  }
  if (props.isLoggedIn) {
    navBarItems.push(
      <li className="nav" key={4}>
        <a href="/spoofyshow">Favorites</a>
      </li>
    );
  } else {
    navBarItems.push(
      <li className="nav" key={5}>
        <a href="/signup">Sign Up</a>
      </li>
    );
    navBarItems.push(
      <li className="nav" key={6}>
        <a href="/users/login">Log In</a>
      </li>
    );
  }

  return (
    <div>
      <h1 className="mainHeader">Spoofy</h1>
      <nav className="navBarItems">
         <h1>{navBarItems}</h1>
      </nav>
    </div>
  );
}

export default NavBar;
