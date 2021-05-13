import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function DropdownButton() {
  return (
    <div className="dropdownBtn">
      <section>
        
        <NavDropdown title="Movie Titles" id="nav-dropdown">
          <NavDropdown.Item>
            <Link to="/">Home</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/reccew1jvxLDb4lbK">The Silence of the Lambs</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/reckgkftaEURuX8nS">Space Jam</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recxuM0hH8uz7qyDn">The Fifth Element</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recZdS3JCeMMEZxeF">Edward Sissorhands</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recxok2qGReTTCByE">Clueless</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/recEcASruxvvSP1fb">Fight Club</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </section>
    </div>
  );
}
export default DropdownButton;
