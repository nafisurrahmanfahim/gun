import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./product.css"
import Akm from "../../assets/gun5.jpg"
import gun2 from "../../assets/gun4.webp"
import gun3 from "../../assets/autogun3.avif"
import gun4 from "../../assets/gun6.jpg"
import Productreusable from '../reusable/Productreusable'

const Product = () => {
    return (
        <section id="product">
            <Container>

                <Row>
                    <Col lg={12}>
                        <div className="title">
                            <h3>Featured Products</h3>
                            <p>Some of the latest, coolest gear that we like.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <Row>
                            <Productreusable img={Akm} delprice="$969.99" price="$749.99"/>
                            <Productreusable img={gun2} delprice="$323.99" price="$289.99"/>
                            <Productreusable img={gun3} price="$430.29"/>
                            <Productreusable img={gun4} price="$6424.99"/>
                            <Productreusable img={gun4} price="$6424.99"/>
                            <Productreusable img={gun4} price="$6424.99"/>
                            <Productreusable img={gun4} price="$6424.99"/>
                            <Productreusable img={gun4} price="$6424.99"/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Product