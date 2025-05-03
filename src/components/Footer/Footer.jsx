import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h5>About Us</h5>
            <p>
              We provide secure and high-speed proxy services to protect your
              privacy and enhance online accessibility. Browse safely and freely
              with our cutting-edge technology.
            </p>
          </Col>

          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="footer-section">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com">
                <FaFacebook />
              </a>
              <a href="https://twitter.com">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p className="footer-copy">
              &copy; 2025 Proxy Service. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
