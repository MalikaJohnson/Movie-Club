import Carousell from "./Carousell"
import Moviecard from "./Moviecard"

function Homepage() {
  return (
    <>
      <br />
      <br />
      <br />
      <h2 className="quote">"THE OBJECT OF ART IS NOT TO REPRODUCE REALITY, BUT TO CREATE
        A REALITY OF THE SAME INTENSITY."</h2>
      <br/>
        <h5>-Alberto Giacometti</h5>
      <br/>
      <br/>
      <br/>
      <h4>
        Welcome to Le Ciné Club, the movie app where members are given the
        chance to rate and discuss handpicked movies every month. Members are
        given the chance to test out their skills as a critic, as well as
        participate in thought provoking discussions with like minded
        individuals, or those on the complete opposite side of the spectrum.
        <br />
        <br />
        So Bienvenue Mes Amis!! This months theme is: 90s Classics.
      </h4>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Carousell />
      <br/>
      <br />
      <br/>
      <br />
      <h4>Check back in next month for the beginning of our Action Packed Summer. </h4>
      <br />
      <br />
      <br />
      <Moviecard />
      <br />
      <br />
      <br />
    </>
  );
}

export default Homepage;
