import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

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
        duration={0.8}
      />
      {menuOpen && (
        <>
          <Offcanvas show={menuOpen} onHide={() => setMenuOpen(!menuOpen)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Quick search</Nav.Link>
                <Nav.Link eventKey="link-1">Table</Nav.Link>
                <Nav.Link eventKey="link-2">Charts</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </nav>
  );
};

export default NavBar;
