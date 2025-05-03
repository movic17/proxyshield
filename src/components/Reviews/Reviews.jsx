import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar, FaUserCircle } from "react-icons/fa";
import "./reviews.css";

const reviews = [
  {
    name: "John Doe",
    review:
      "This proxy service is a game changer! Super fast and reliable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    review:
      "Excellent security features and very easy to use. I feel safe browsing the web!",
    rating: 4.5,
  },
  {
    name: "David Smith",
    review:
      "Great for accessing geo-blocked content. Works perfectly with streaming services!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <Container className="reviews-container py-5">
      <h2 className="reviews-title">Reviews</h2>
      <Row className="g-4">
        {reviews.map((review, index) => (
          <Col md={4} key={index}>
            <Card className="review-card text-center">
              <Card.Body>
                <FaUserCircle size={50} className="user-icon" />
                <Card.Title>{review.name}</Card.Title>
                <Card.Text className="review-text">"{review.review}"</Card.Text>
                <div className="stars">
                  {[...Array(Math.round(review.rating))].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
