import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Movie from "./components/Movie";
import { baseURL2, config2 } from "./services";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import './App.css';
import axios from "axios";


function App() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    const getMovie = async () => {
      const resp = await axios.get(baseURL2, config2);
      setMovieInfo(resp.data.records);
    }
    getMovie();
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
     

      <Footer />
    </div>
  );
}

export default App;
