import React from "react";
import { Container } from "react-bootstrap";
import "./boxing.css";
import Slider from "react-slick";
import slider1 from "../../assets/oo.webp"
import slider2 from "../../assets/slider 5.jpg"
import slider3 from "../../assets/slider 7.avif"
import { GrFormNext } from "react-icons/gr";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ScrollToTop from "react-scroll-to-top";



function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div className="naxt" onClick={onClick}
    > <GrFormNext /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="prev" onClick={onClick}
    >< MdKeyboardArrowLeft/></div>
  );
}


const Boxing = () => {

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000
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
      <ScrollToTop smooth />
    </section>
  );
};

export default Boxing;
