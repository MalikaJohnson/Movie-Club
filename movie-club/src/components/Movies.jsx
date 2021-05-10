
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

  
function Movies(props) {
  
  const [movie, setMovie] = useState();
  const params = useParams();


  useEffect(() => {
  
    const movie = props.movies.find((movie) => movie.id === params.id)
    console.log(movie)
      if (movie) {
        setMovie(movie)
      
    }
  }, [props.movie, params.id])

  

  return (

    <div className="movie">
      <img>{movie.fields?.img}</img>
      <h3>{movie.fields?.title}</h3>
      <h3>{movie.fields?.["year-released"]}</h3>
      <h3>{movie.fields?.plot}</h3>


    </div>
  )
}

export default Movies;

