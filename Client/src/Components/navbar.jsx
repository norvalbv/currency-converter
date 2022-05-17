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
        color="#44403c"
        toggled={menuOpen}
        toggle={setMenuOpen}
        label="Open Menu"
        duration={0.8}
      />
      {menuOpen && (
        <>
          <Offcanvas show={menuOpen} onHide={() => setMenuOpen(!menuOpen)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Currency Converter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                // defaultActiveKey="currency-converter"
                className="flex-column"
                activeKey="currency-converter"
              >
                <Nav.Link
                  eventKey="currency-converter"
                  href="#currency-converter"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Quick search
                </Nav.Link>
                <Nav.Link
                  eventKey="currency-table"
                  href="#currency-table"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Currency Table
                </Nav.Link>
                <Nav.Link
                  eventKey="historical-data"
                  href="#historical-data"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Historical Data
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </nav>
  );
};

export default NavBar;
