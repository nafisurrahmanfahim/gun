import React from "react";
import { Container } from "react-bootstrap";
import "./boxing.css";

const Boxing = () => {
  return (
    <section id="boxing">
      <Container>
        <div className="boxs">
          <div className="cardbox">
            <div className="text">
              <h4>TOP NOTCH</h4>
              <h3>DOUBLE END BAGS</h3>
              <p>Keep your reflexes sharp.</p>
              <div className="buttons">
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Boxing;
