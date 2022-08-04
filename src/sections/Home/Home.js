import React from "react"
import Info from "../../components/Info/Info"
import Search from "../../components/Search/Search"
import Illustration from "../../components/Illustration/Illustration"
import { Row, Col, Container } from "react-bootstrap"
import MySlider from "../../components/Search/Slider"
import "./home.css"

export default function Home() {
    return (
        <Container className="home-container">
            <Row>
                <Col lg={true}> <Info /></Col>
                <Col lg={true}> <Illustration /></Col>s
            </Row>
            <Row>
                <Col md={12}> <Search /> </Col>
            </Row>
        </Container>
    )
}