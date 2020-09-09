import React from "react";
import "./NavBar.css";
//import Breadcrumb from 'react-bootstrap/Breadcrumb'


function NavBar(props) {

  let navBarItems = [

    <li key={1}>

      <a href="/music">Music</a>
    </li>,
  ];
  if (props.isLoggedIn) {
    navBarItems.push(
      <h2 key={2}>
        <a href="/logout">Log Out</a>
<<<<<<< HEAD
      </h2>
    );
=======
      </li>
    )
>>>>>>> 5bd746d79781e33204ee621f38241493a0078906
  } else {
    navBarItems.push(
      <h2 key={3}>
        <a href="/signup">Sign Up</a>
      </h2>
    );
    navBarItems.push(
      <h2 key={4}>
        <a href="/users/login">Log In</a>
      </h2>
    );
  }

  return (
    <div>
      {/* <img src="https://i.imgur.com/YcAFh05.png" width="100%" height="430px"/> */}
      <h1 className="mainHeader">Spoofy</h1>
      <nav className="navBarItems">
         <h2>{navBarItems}</h2>
      </nav>
    </div>

);
}

export default NavBar;
