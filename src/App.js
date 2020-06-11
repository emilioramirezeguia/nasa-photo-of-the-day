import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY  } from "./constants/secrets.js";
import "./App.css";
import Image from "./components/image/image.js";

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
      <Image url={nasa.url}/>
    </div>
  );
}

export default App;
