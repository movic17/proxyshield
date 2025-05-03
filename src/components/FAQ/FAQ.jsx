import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "./faq.css"; // Import the CSS file

const FAQ = () => {
  return (
    <Container className="faq-container py-5">
      <h2 className="faq-title">FAQs</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            🔒 How does the proxy ensure my privacy?
          </Accordion.Header>
          <Accordion.Body>
            Our proxy service uses advanced encryption and routing techniques to
            safeguard your online activities. It masks your IP address and
            prevents tracking by third parties, ensuring anonymity while
            browsing. Additionally, we have a strict no-logs policy, meaning
            your data is never stored or shared. Whether you're accessing
            geo-restricted content or protecting sensitive information, our
            proxy provides a secure and private connection.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            ⚡ Will the proxy slow down my internet speed?
          </Accordion.Header>
          <Accordion.Body>
            While all proxies introduce some latency, our service is optimized
            for speed. We use high-performance servers located worldwide to
            minimize lag and maintain fast connections. Factors such as your
            network stability, server location, and encryption level may affect
            speed, but our proxy is designed to provide a seamless browsing
            experience. For best results, connect to servers closest to your
            physical location.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            ⚖️ Is it legal to use a proxy service?
          </Accordion.Header>
          <Accordion.Body>
            Using a proxy is legal in most countries, but restrictions may vary
            depending on local laws. Our service is designed for ethical use,
            including securing personal data, bypassing censorship, and
            accessing region-locked content. However, users are advised to check
            regulations in their country to ensure compliance. Misuse of proxies
            for fraudulent or illegal activities may result in consequences
            under cybersecurity laws.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            🛠️ How do I troubleshoot connection issues?
          </Accordion.Header>
          <Accordion.Body>
            If you're experiencing connectivity problems, try the following
            steps: Ensure your internet connection is stable, restart your
            device, switch to a different server, clear cache and cookies, or
            disable conflicting browser extensions. If issues persist, contact
            our support team for assistance. Our team is available 24/7 to help
            resolve any proxy-related concerns.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            🌎 Can I access geo-restricted content with this proxy?
          </Accordion.Header>
          <Accordion.Body>
            Yes! Our proxy lets you bypass geo-restrictions and access content
            unavailable in your region. Whether you're streaming international
            shows, unlocking websites, or securely browsing while traveling, our
            network ensures smooth access. Choose a server in the country where
            the content is available for optimal performance.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQ;
