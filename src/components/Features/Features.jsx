import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./features.css";
import { FaLock, FaRocket, FaSync } from "react-icons/fa";

const features = [
  {
    icon: <FaLock />,
    title: "Secure & Private",
    desc: "Your data is protected with industry-leading encryption.",
  },
  {
    icon: <FaRocket />,
    title: "Lightning Fast",
    desc: "Experience high-speed proxy services without lag.",
  },
  {
    icon: <FaSync />,
    title: "Easy Integration",
    desc: "Plug and play with any system effortlessly.",
  },
];

const Features = () => {
  return (
    <Container className="features-section">
      <h2 className="text-center section-title">Choose Us</h2>
      <Row className="justify-content-center">
        {features.map((feature, index) => (
          <Col md={4} sm={12} key={index}>
            <Card className="feature-card">
              <Card.Body className="text-center">
                <div className="feature-icon">{feature.icon}</div>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
