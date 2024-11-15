import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <div className="boxs">
          <div className="content">
            <div className="text">
              <h3>
                The Most Trusted Name In The Firearms Business For Over Twenty
                Years.
              </h3>
              <div className="button">
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
