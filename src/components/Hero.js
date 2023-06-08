import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function Hero() {
  return (
    <div className="bg-dark py-5 px-2">
      <Container className="mt-md-5">
        <Row className="justify-content-center align-item-center">
          <Col md={5} className='text-center text-md-start py-5 px-3 px-lg-4'>
            <h1 className="text-white display-3">
              The Black Friday Countdown is on.
            </h1>
            <p className="text-white mb-3 lead">
              Be the first to know about Black Friday deals and other Google
              store news.
            </p>
            <Button variant="outline-light mb-5">Light</Button>{" "}
            <p className="text-white small">
              All promotions are subject to the terms and condtions.
            </p>
          </Col>
          <Col md={6} className='py-2 py-md-5 px-4'>
            <div className="text-center">
              <Image src="https://res.cloudinary.com/ceenobi/image/upload/e_bgremoval/v1668153032/Gadgets/pixel-7-pro_cjxuki.png" fluid/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
