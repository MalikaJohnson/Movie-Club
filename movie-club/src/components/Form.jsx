
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL1, config } from "../services";

function Form(props) {
  const [author, setAuthor] = useState("")
  const [rating, setRating] = useState("")
  const [review, setReview] = useState("")
  const params = useParams()


  const handleSubmit = async (e) => {
    e.preventDefault()
    const newReview = {
      author,
      rating,
      review,
      movies: [params.id]
    };

    await axios.post(`${baseURL1}`, {fields: newReview}, config);
  props.setToggleFetch((curr) => !curr);

  }



  return (
    
    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="author"></label>
        <input
          placeholder="Author"
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br/>
        <label htmlFor="rating"></label>
        <input
          placeholder="Rating"
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br/>
        <label htmlFor="review"></label>
        <input
          placeholder='Review'
          type="text"
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        
        />
        <br />
        
          <button type="Post">Post</button>
      </form>
    </div>
  )


}

export default Form;