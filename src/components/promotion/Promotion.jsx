import React from 'react'
import "./promotion.css"
import { Container, Row, Col } from "react-bootstrap"
import promImg1 from "../../assets/prom.jpg"
import pool from "../../assets/right.jpg"
import three from "../../assets/three.jpg"
import four from "../../assets/four.jpg"
import five from "../../assets/five.jpg"

const Promotion = () => {
    return (
        <section id="promotion">
            <Container>

                <Row>
                    <Col lg={12}>
                        <div className="topText">
                            <h3>Current Promotions</h3>
                            <p>Drawings, hot items, and more ...</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <div className="one">
                            <img src={promImg1} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="two">
                            <img src={pool} alt="" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div className="box">
                    <Col lg={4}>
                        <div className="three">
                            <img src={three} alt="" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="four">
                            <img src={four} alt="" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="five">
                            <img src={five} alt="" />
                        </div>
                    </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Promotion