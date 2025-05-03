import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaClipboard } from "react-icons/fa6";

// import Bitcoin from "../../assets/bitcoin.png";
// import Ethereum from "../../assets/ethereum.png";
// import USDTTRC20 from "../../assets/usdt.png";
// import USDTERC20 from "../../assets/usdt.png";

function ModalPayment({ show, onHide }) {
  const [formData, setFormData] = useState({
    Bitcoin: "bc1qtwxdujes8nxt660r6c84wper70gfdtqxzlv548",
    Ethereum: "0x129d05e917206Be60702315751cddab93902Ea9C",
    USDT_TRC20: "TSNfnsjZPxntAmUkNEmqc2Gdh2vNCv3yYk",
    USDT_ERC20: "0x6012730daff9a41d1b12ead3767c01a5f2e08ea3",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value).then(() => {
      alert(`Copied: ${value}`);
    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Proceed to payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="px-4">Copy address, then proceed to payment.</h5>
          <p>Go to any cryptocurrency of your choice and make the payment.</p>
          <Container className="mt-4 p-4">
            <Row className="">
              <Col>
                <Form className="">
                  {Object.entries(formData).map(([key, value], index) => (
                    <Form.Group
                      className="mb-3 d-flex justify-content-center align-items-center"
                      key={index}
                    >
                      <Form.Label className="me-2">{key}</Form.Label>
                      <Form.Control
                        type="text"
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="me-2"
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => copyToClipboard(value)}
                      >
                        <FaClipboard height={24} width={24} />
                      </Button>
                    </Form.Group>
                  ))}
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPayment;
