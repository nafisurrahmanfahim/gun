import React from "react";
import { Container } from "react-bootstrap";
import "./boxing.css";
import Slider from "react-slick";
import slider1 from "../../assets/oo.webp"
import slider2 from "../../assets/slider 4.png"
import slider3 from "../../assets/prom.jpg"

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
        <section className="main">
          <Slider {...settings}>
            <div className="images">
              <img src={slider2} alt="" />
            </div>

            <div className="images">
              <img src={slider1} alt="" />
            </div>

            <div className="images">
              <img src={slider3} alt="" />
            </div>
          </Slider>
        </section>
      </Container>
    </section>
  );
};

export default Boxing;
