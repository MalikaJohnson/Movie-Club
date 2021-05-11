import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Movie(props) {
  
  const params = useParams()

  console.log(props.movies)
  const movie = props.movies.find((movie) => movie.id === params.id)
  console.log(movie)
     
  if (props) {
   
 
    return (
      <div>
        
        <img src={ movie && movie.fields.img} />
        <h3>{ movie && movie.fields.title}</h3>
        <h3>{movie && movie.fields.yearReleased}</h3>
        <h3>{ movie && movie.fields.plot}</h3>


      </div>
    )
  }
}
export default Movie;