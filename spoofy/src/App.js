import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
// import SpoofyList from "./components/SpoofyList/SpoofyList";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LoginForm/LoginForm";
import LogOut from "./components/LogOut/LogOut";
import "./App.css";
import MusicInfo from './components/MusicInfo/MusicInfo';


// function App(props) {
const App = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });
  


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allMusic, setAllMusic] = useState({})

  const [query, updateQuery] = useState({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/',
    name: '',
    searchURL: ''
  })



  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  //API QUERY START
  useEffect(() => {
		query.name.length > 0 &&
			(async () => {
				try {
          console.log(query.name)
          const response = await axios.get(query.searchURL)
          setAllMusic({ ...allMusic, ...response.data });
					updateQuery({ ...query, searchURL: '', name: '' });
				} catch (error) {
					console.error(error);
				}
			})();
  }, [allMusic, query]);

  const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: `${query.baseURL}${query.name}`
		});
	};

	const handleChange = event => {
		/*handles the query*/
		updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
  };
  //API QUERY END

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
            path="/signup"
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
            render={() => { '/users'
            //   return <SpoofyList isLoggedIn={isLoggedIn} />;
            }}
          />
        <Route
        path='/music'
        render={(props) =>{
          return (
        <div className="Page-wrapper">
			<h2>Spoofy App</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">
					<input
						id="name"
						type="text"
						value={query.name}
						onChange={handleChange}
					/>
				</label>
				<input type="submit" value="Search For Artist" />
			</form>
			{Object.keys(allMusic).length > 0 && <MusicInfo allMusic={allMusic} />}
		</div>
          )}
        }
        />
    </Router>
      </div>
      
    </div>
  );
};


export default App;
