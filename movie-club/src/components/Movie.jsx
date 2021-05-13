
import { useParams } from "react-router-dom";

function Movie(props) {
  const params = useParams();

  console.log(props.movies);
  const movie = props.movies.find((movie) => movie.id === params.id);
  console.log(movie);

  if (props) {
    return (
      <div>
        <br />
        <br />
        <br />
        <section className="movieContainer">
          <section classname="moviePoster">
          <img src={movie && movie.fields.img} alt="moviePoster"/>
          </section>
          <section className="movieInfo">
          <h3>{movie && movie.fields.title}</h3>
          <h3>{movie && movie.fields.yearReleased}</h3>
          <h3>{movie && movie.fields.plot}</h3>
          </section>
        </section>
        <br />
        <hr className="dash" />
        <br />
        <h2>-------Reviews-------</h2>
        <br />
        <br />
        <section className="commentContainer">
          {movie &&
            movie.fields.comments.map((comment) => (
              <h4>{comment.fields.author} </h4>
            ))}

          {movie &&
            movie.fields.comments.map((comment) => (
              <h5>{comment.fields.rating} </h5>
            ))}

          {movie &&
            movie.fields.comments.map((comment) => (
              <h4>{comment.fields.review} </h4>
            ))}
        </section>
      </div>
    );
  }
}
export default Movie;
