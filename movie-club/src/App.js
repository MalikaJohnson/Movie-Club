import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Carousell from "./components/Carousell";
import { Route } from "react-router-dom";
import './App.css';

function App() {



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
      <Route path="/lamb">
      <Movies movieId=""/>
      </Route>
      <Route path="/jam">
      <Movies />
      </Route>
      <Route path="/fifth">
      <Movies />
      </Route>
      <Route path="/edward">
      <Movies />
      </Route>
      <Route path="/fight">
      <Movies movieId="recEcASruxvvSP1fb"/>
      </Route>
      <Route path="/clueless">
      <Movies />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
