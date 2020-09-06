import React, {useState, useEffect} from "react";
import axios from "axios";

import SpoofyShow from "../SpoofyShow";


const SpoofyList = (props) => {
<<<<<<< HEAD:spoofy/src/components/SpoofyList/SpoofyList.js
  const [spoofy ,setSpoofy] = useState([]);
=======
  const [spoofy, setSpoofy] = useState([]);
>>>>>>> 365e7aa1f0c637ab79ee655d30e09ad6ad479630:spoofy/src/components/spoofyList/spoofyList.js

  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/api/spoofy");
      setSpoofy(response.data);
    }
    fetchData();
  }, [spoofy]);

  const Spoofy = spoofy.map((spoofy, i) => {
    return (
      <div key={i}>
        <spoofyShow spoofy={spoofy} isLoggedIn={props.isLoggedIn} />
      </div>
    );
  });

  return <div>{Spoofy}</div>;
};

export default SpoofyList;
