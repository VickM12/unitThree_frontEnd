import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
// import { SpotifyApiContext } from 'react-spotify-api';


import NavBar from "./components/NavBar/NavBar";
import SpoofyList from "./components/SpoofyList/SpoofyList";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LoginForm/LoginForm";
import LogOut from "./components/LogOut/LogOut";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({
      email: "",
      password: "",
      isLoggedIn: false,
    });
    localStorage.clear();
  };

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/users/signup", {
        email: state.email,
        password: state.password,
      });
      console.log(response);
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        email: state.email,
        password: state.password,
      });
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="body">
        <Router>
          <Route
            path="/users/signup"
            render={(props) => {
              return (
                <SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                />
              );
            }}
          />
          <Route
            path="/logout"
            render={(props) => {
              return (
                <LogOut isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
              );
            }}
          />
          <Route
            path="/users/login"
            render={(props) => {
              return (
                <LogInForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/"
            render={() => {
              return <SpoofyList isLoggedIn={isLoggedIn} />;
            }}
          />
        </Router>
      </div>
    </div>
  );
};

export default App;
