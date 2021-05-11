
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Form() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [review, setReview] = useState("")

  const params = useParams
  
  useEffect(() => {
    if (params.id && props.movies.length) {
      const movie = props.movies.find((movie) => movie.id === params.id);
      if (movie) {
        setTitle(movie.fields.title);
        setRating(movie.fields.rating);
        setReview(movie.fields.review);
      }
    }
  }, [props.movie, params.id]);

  const handleSubmit = async (e) => {
    e. preventdefault()
    const newReview = {
      title,
      rating,
      review,
    }

    
  }

  return (
    
    <div>
      <form>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="rating">Rating: </label>
        <input
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="review">Review: </label>
        <input
          type="text"
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
          <button type="Post"></button>
      </form>
    </div>
  )


}

export default Form;