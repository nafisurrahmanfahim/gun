import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Akm from "../../assets/akm.jpg"

const Productreusable = ({img,price,delprice}) => {
    return (
        <Col lg={3}>
            <div className="box">
            <div className="cards">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="content">
                    <h4>Centry VSKA ipsum itaque vel! 7.62x39,16.25"Barrel,Chevron Comp, Russian Red, 30rd</h4>
                    <h5><del>{delprice}</del><span>{price}</span></h5>
                    <h6>Very Low Stock</h6>
                </div>
            </div>
            </div>
        </Col>
    )
}

export default Productreusable