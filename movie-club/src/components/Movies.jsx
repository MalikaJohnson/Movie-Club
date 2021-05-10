import {  baseURL2, config_2 } from "./services";
import { useState, useEffect } from "react";
import axios from "axios";

function Movies(props) {
  const [movieInfo, setMovieInfo] = useState([])
  // const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(baseURL2, config_2);
      setMovieInfo(resp.data.records[0]);
    }
    getMovie();
  }, []);

  if (!movieInfo) return <h3>Grabbing your Movie</h3>

  return (

    <div className="movie">
      <img>{movieInfo.img}</img>
      <h3>{ movieInfo.title}</h3>


    </div>
  )
}

export default Movies;

