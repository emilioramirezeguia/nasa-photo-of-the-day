import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY  } from "./constants/secrets.js";
import "./App.css";

function App() {
  const [nasa, setNasa] = useState([]);

  useEffect( function() {
    axios.get(`${BASE_URL}api_key=${API_KEY}`)
    .then(response => {
      setNasa(response.data);
    })
    .catch(error => {
      console.log("Error: ", error);
    })
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
