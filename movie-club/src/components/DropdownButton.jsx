import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

function DropdownButton() {
return (
  <div>
     <section> 
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Movie Titles
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item ><Link to="/">Home</Link></Dropdown.Item>
    <Dropdown.Item ><Link to="/reccew1jvxLDb4lbK">The Silence of the Lambs</Link></Dropdown.Item>
    <Dropdown.Item ><Link to="/reckgkftaEURuX8nS">Space Jam</Link></Dropdown.Item>
    <Dropdown.Item ><Link to="/recxuM0hH8uz7qyDn">The Fifth Element</Link></Dropdown.Item>
    <Dropdown.Item ><Link to="/recZdS3JCeMMEZxeF">Edward Sissorhands</Link></Dropdown.Item>
    <Dropdown.Item ><Link to="/recxok2qGReTTCByE">Clueless</Link></Dropdown.Item>
    <Dropdown.Item ><Link to="/recEcASruxvvSP1fb">Fight Club</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      
      </section>

  </div>
)
}
export default DropdownButton;