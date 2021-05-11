import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Nav">
      <h1>Le Ciné Club</h1>
      <main className={visible ? "visible" : "invisible"}>
        <button onClick={() => setVisible(!visible)}>Movies</button>
        <Link to="/">Home</Link>
        <Link to="/reccew1jvxLDb4lbK">The Silence of the Lambs</Link>
        <Link to="/reckgkftaEURuX8nS">Space Jam</Link>
        <Link to="/recxuM0hH8uz7qyDn">The Fifth Element</Link>
        <Link to="/recZdS3JCeMMEZxeF">Edward Sissorhand</Link>
        <Link to="/recEcASruxvvSP1fb">Fight Club</Link>
        <Link to="/recxok2qGReTTCByE">Clueless</Link>
      </main>
    </div>
  );
}
export default Nav;
