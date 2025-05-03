import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaShieldAlt, FaFileAlt, FaBalanceScale } from "react-icons/fa";
import "./security-and-compliance.css";

const SecurityAndCompliance = () => {
  return (
    <Container className="security-container py-5">
      <h2 className="security-title">Security</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="security-card text-center">
            <Card.Body>
              <FaShieldAlt size={50} className="icon-custom text-primary" />
              <Card.Title>Encryption & Data Protection</Card.Title>
              <Card.Text>
                Our proxy uses **end-to-end encryption** to ensure your data
                remains private and secure. With **AES-256 encryption**, all
                transmitted information is safeguarded against cyber threats,
                preventing unauthorized access. Your connection is routed
                through multiple secured servers, ensuring anonymity and
                protection from potential surveillance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="security-card text-center">
            <Card.Body>
              <FaFileAlt size={50} className="icon-custom text-success" />
              <Card.Title>Strict No-Logging Policy</Card.Title>
              <Card.Text>
                We follow a **zero-log policy**, meaning we never track or store
                your browsing history, session data, or personal information.
                Unlike traditional proxies, our commitment to privacy ensures
                **no metadata or identifiable logs** are recorded. You can
                browse the web with confidence, knowing your data is not being
                monitored or shared with third parties.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="security-card text-center">
            <Card.Body>
              <FaBalanceScale size={50} className="icon-custom text-warning" />
              <Card.Title>Legal Compliance & Ethical Use</Card.Title>
              <Card.Text>
                Our proxy service operates within **legal regulations**,
                ensuring compliance with global cybersecurity laws. While
                proxies are **legal in most countries**, users must adhere to
                local rules and avoid unethical activities. We encourage
                responsible usage to **protect freedom of access** while
                respecting digital integrity and cybersecurity standards.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SecurityAndCompliance;
