import React, {useState, useEffect} from "react";
import axios from "axios";

import SpoofyShow from "../SpoofyShow/SpoofyShow";

const SpoofyList = (props) => {
  const [spoofy, setSpoofy] = useState([]);

  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("");
      setSpoofy(response.data);
    }
    fetchData();
  }, [spoofy]);

  const Spoofy = spoofy.map((spoofy, i) => {
    return (
      <div key={i}>
        <SpoofyShow spoofy={spoofy} isLoggedIn={props.isLoggedIn} />
      </div>
    );
  });

  return <div>{Spoofy}</div>;
};

export default SpoofyList;
