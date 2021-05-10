import { baseURL2, config_2 } from "../services";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Movies(props) {
  const [movieInfo, setMovieInfo] = useState([]);
  const [movie, setMovie] = useState();
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const resp = await axios.get(baseURL2, config_2);
      console.log(resp.data.records[0]);
    }
    getMovie();
  }, []);

  useEffect(() => {
    // if (params.id && props.recipes.length) {
    const movie = props.movies.find((movie) => movie.id === params.id)
    console.log(movie)
      if (movie) {
        setMovie(movie)
      
    }
  }, [props.recipes, params.id])

  if (!movieInfo) return <h3>Grabbing your Movie</h3>

  return (

    <div className="movie">
      <img>{movieInfo.img}</img>
      <h3>{movieInfo.title}</h3>
      <h3>{movieInfo["year-released"]}</h3>
      <h3>{movieInfo.plot}</h3>


    </div>
  )
}

export default Movies;

