import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import '';

function Specs() {
  return (
    <Container className="py-4">
      <Row className="mt-4 justify-content-center">
        <Col md={6} lg={4}>
          <Card
            className="text-center shadow-lg pricing-card mb-4 px-5 py-5"
            style={{ height: "260px" }}
          >
            <Card.Body className="justify-content-between">
              <div>
                <Card.Title className="fw-bold">Quantity Required</Card.Title>
                <span>Number of IPv4</span>
                <span className="px-4 text-success fw-bold">1</span>
                <h5 className="text=center"></h5>
                <div>
                  <h5>&pound;198</h5>
                  <h5 className="text-success">&pound;198 / 1 IPv4</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            className="text-center shadow-lg pricing-card mb-4 px-5 py-5"
            style={{ height: "260px" }}
          >
            <Card.Body className="justify-content-between">
              <div>
                <Card.Title className="fw-bold">IPs</Card.Title>
                <span> - Up to 1Gbps</span>
                <br />
                <span> - Http/Https/Socks5</span>
                <br />
                <span> - Dedicated</span>
                <br />
                <span> - &infin; Bandwidth</span>
                <br />
                <span> - Support 24/7/365</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Specs;
