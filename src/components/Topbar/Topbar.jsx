import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./topbar.css";
import Logo from "../../assets/logo.png";

const Topbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="logo">
          <img src={Logo} alt="" width={70} height={70} />
          CloakPath
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Proxy for" id="basic-nav-dropdown">
              <NavDropdown title="Social media" id="nested-nav-dropdown">
                <NavDropdown.Item href="/tinder">
                  proxy for Tinder
                </NavDropdown.Item>
                <NavDropdown.Item href="/instagram">
                  proxy for Instagram
                </NavDropdown.Item>
                <NavDropdown.Item href="/facebook">
                  proxy for Facebook
                </NavDropdown.Item>
                <NavDropdown.Item href="/telegram">
                  proxy for Telegram
                </NavDropdown.Item>
                <NavDropdown.Item href="/snapchat">
                  proxy for Snapchat
                </NavDropdown.Item>
                <NavDropdown.Item href="/printerest">
                  proxy for Printerest
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Gaming" id="nested-nav-dropdown">
                <NavDropdown.Item href="/fifa">Proxy for FIFA</NavDropdown.Item>
                <NavDropdown.Item href="/staem">
                  Proxy for Steam
                </NavDropdown.Item>
                <NavDropdown.Item href="/origin">
                  Proxy for Origin
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Other purposes" id="nested-nav-dropdown">
                <NavDropdown.Item href="/yelp">Proxy for Yelp</NavDropdown.Item>
                <NavDropdown.Item href="/swagbucks">
                  Proxy for Swagbucks
                </NavDropdown.Item>
                <NavDropdown.Item href="/spotify">
                  Proxy for Spotify
                </NavDropdown.Item>
                <NavDropdown.Item href="/aiostream">
                  Proxy for Aiostream
                </NavDropdown.Item>
                <NavDropdown.Item href="/appen">
                  Proxy for Appen
                </NavDropdown.Item>
                <NavDropdown.Item href="/microsoft">
                  Proxy for Microsoft
                </NavDropdown.Item>
                <NavDropdown.Item href="/betting">
                  Proxy for Betting
                </NavDropdown.Item>
                <NavDropdown.Item href="/fiverr">
                  Proxy for Fiverr
                </NavDropdown.Item>
                <NavDropdown.Item href="/netflix">
                  Proxy for Netflix
                </NavDropdown.Item>
                <NavDropdown.Item href="/paypal">
                  Proxy for Paypal
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
