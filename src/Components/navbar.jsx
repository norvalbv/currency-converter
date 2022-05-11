import Hamburger from "hamburger-react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Hamburger
        distance="lg"
        color="#fff"
        toggled={menuOpen}
        toggle={setMenuOpen}
        label="Open Menu"
      />
      {menuOpen && (
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      )}
    </nav>
  );
};

export default NavBar;
