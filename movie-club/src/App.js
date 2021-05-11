import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Homepage from "./components/Homepage";
import Movie from "./components/Movie";
import { baseURL1, config } from "./services";
import { baseURL2, config2 } from "./services";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import './App.css';
import axios from "axios";


function App() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    const getMovieAndComments = async () => {
      const movieResp = await axios.get(baseURL2, config2);
      const commentResp = await axios.get(baseURL1, config);
      const retrievedComments = commentResp.data.records;
      const retrievedMovies = movieResp.data.records.map((movie) => {
        return {
          ...movie,
          fields: {
            ...movie.fields,
            comments: movie.fields.comments ? retrievedComments.filter((comment) =>
              movie.fields.comments.includes(comment.id)) : []
          }
        }
      });
    
      setMovieInfo(retrievedMovies);
    }
    getMovieAndComments();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      
      <Route exact path="/">
        <Homepage />
        </Route>
      <Route path="/:id">
        <Movie movies={movieInfo} />
        
      </Route>
      <Form setToggleFetch={setToggleFetch} />

      <Footer />
    </div>
  );
}

export default App;
