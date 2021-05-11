
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Form() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [comments, setComments] = useState("")

  const params = useParams 

  return (
    
    <div>
      <form>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value="{title}"
          onChange={(e) => ()}
        />
        <label htmlFor="rating">Rating: </label>
        <input
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => ()}
        />
        <label htmlFor="comments">Comments: </label>
        <input
          type="text"
          id="comments"
          value={comments}
          onChange={(e) => ()}
        />

      </form>
    </div>
  )


}

export default Form;