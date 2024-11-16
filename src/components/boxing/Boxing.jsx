import React from "react";
import { Container } from "react-bootstrap";
import "./boxing.css";
import boxing1 from "../../assets/oo.webp"
import boximg2 from "../../assets/src/assets/box 2.jpg"
import Slider from "react-slick";

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
            <img src={boximg2} alt="" />
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
