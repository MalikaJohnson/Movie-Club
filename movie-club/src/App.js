import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Movie from "./components/Movie";
import Carousell from "./components/Carousell";
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
        <h3>Home</h3>
        </Route>
      
      <h4>Welcome to Le Ciné Club, the movie app where
      members are given the chance to rate and discuss handpicked movies
      every month. Members are given the chance to test out their 
      skills as a critic, as well as participate in thought provoking
      discussions with like minded individuals, or those on the
      complete opposite side of the spectrum.
        <br />
        <br />
        So Bienvenue Mes Amis!! This months theme is 90s Classics.
      </h4>
      <Carousell />
      
      <Route path="/:id">
        <Movie movies={movieInfo} />
      </Route>
     

      <Footer />
    </div>
  );
}

export default App;
