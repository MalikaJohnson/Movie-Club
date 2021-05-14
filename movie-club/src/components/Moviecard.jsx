import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";

function Moviecard() {
  return (
    <div className="cardContainer">
      <CardDeck>
        <Card>
          <Card.Img
            className="imgCard"
            variant="top"
            src="https://movieposters2.com/images/1123275-b.jpg"
          />
          <Card.Body>
            <Card.Title>300</Card.Title>
            <Card.Text>
              In 480 B.C. a state of war exists between Persia, led by King
              Xerxes (Rodrigo Santoro), and Greece. At the Battle of
              Thermopylae, Leonidas (Gerard Butler), king of the Greek city
              state of Sparta, leads his badly outnumbered warriors against the
              massive Persian army.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
          className="imgCard"
            variant="top"
            src="https://movieposters2.com/images/662745-b.jpg"
          />
          <Card.Body>
            <Card.Title>Transformers 2 Revenge of the Fallen</Card.Title>
            <Card.Text>
              Two years after he and his Autobot friends saved the Earth from
              the Decepticons, Sam Witwicky (Shia LaBeouf) faces a new battle:
              college. Meanwhile, Optimus Prime and the Autobots are working
              with a secret military organization and trying to make a home for
              themselves on Earth.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
          className="imgCard"
            variant="top"
            src="https://movieposters2.com/images/1747054-b.jpg"
          />
          <Card.Body>
            <Card.Title>Taken</Card.Title>
            <Card.Text>
              Bryan Mills (Liam Neeson), a former government operative, is
              trying to reconnect with his daughter, Kim (Maggie Grace). Then
              his worst fears become real when sex slavers abduct Kim and her
              friend shortly after they arrive in Paris for vacation.
            </Card.Text>
            .
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
          className="imgCard"
            variant="top"
            src="https://fanart.tv/fanart/movies/9335/movieposter/transporter-2-531b8b971e7af.jpg"
          />
          <Card.Body>
            <Card.Title>The Transporter 2</Card.Title>
            <Card.Text>
              Mercenary Frank Martin (Jason Statham) has accepted a job that
              seems easy enough, as chauffeur and bodyguard to young Jack
              (Hunter Clary), son of crusading politician Jefferson Billings
              (Matthew Modine). The problem is that Billings is crusading
              against an international drug cartel.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Moviecard;
