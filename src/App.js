import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY  } from "./constants/secrets.js";
import "./App.css";
import Text from "./components/header/text/text.js";
import ImageContainer from "./components/image/imageContainer.js";

function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState([]);

  useEffect( function() {
    axios.get(`${BASE_URL}api_key=${API_KEY}`)
    .then(response => {
      setPhotoOfTheDay(response.data);
    })
    .catch(error => {
      console.log("Error: ", error);
    })
  }, []);

  return (
    <div className="App">
      <Text text="Astronomy Picture of the Day"/>
      <ImageContainer title={photoOfTheDay.tital} date={photoOfTheDay.date} url={photoOfTheDay.url} explanation={photoOfTheDay.explanation}/>
    </div>
  )
}

export default App;
