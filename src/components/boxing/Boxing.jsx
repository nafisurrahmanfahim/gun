import React from "react";
import { Container } from "react-bootstrap";
import "./boxing.css";
import boxing1 from "../../assets/oo.webp"
import Slider from "react-slick";
import slider2 from "../../assets/slider 1.avif"

const Boxing = () => {

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  };


  return (
    <section id="boxing">
      <Container>
        <Slider {...settings}>
          <div className="images">
            <img src={slider2} alt="" />
          </div>

          <div className="images">
            <img src={boxing1} alt="" />
          </div>

          <div className="images">
            <img src={boxing1} alt="" />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Boxing;
