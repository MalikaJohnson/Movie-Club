
import {Link} from "react-router-dom"
import { useState } from "react";



function Nav() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Nav">
    <h1>Le Ciné Club</h1>
      <main className={visible ? "visible" : "invisible"}>
        
        <button onClick={() => setVisible(!visible)}>Movies</button>
        <Link to= "/">Home</Link>
        <Link to="/lamb">The Silence of the Lambs</Link>
        <Link to="/jam">Space Jam</Link>
        <Link to="/fifth">The Fifth Element</Link>
        <Link to="/edward">Edward Sissorhand</Link>
        <Link to="/fight">Fight Club</Link>
        <Link to="/clueless">Clueless</Link>
       

      </main>
  
      
  </div>
      
   
 )

}
export default Nav;