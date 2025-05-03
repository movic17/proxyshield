import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./cta.css";

const CTA = () => {
  return (
    <Container className="text-center my-5">
      <Card className="cta-card shadow-lg p-4 border-0 bg-light">
        <Card.Body>
          <h2 className="fw-bold mb-3 text-primary">
            Secure & Fast Proxy Service
          </h2>
          <p className="text-secondary">
            Browse the web anonymously and access restricted content with ease.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a
              href="/paypal"
              type="button"
              class="btn btn-outline-primary btn-lg"
            >
              Start Browsing
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CTA;
