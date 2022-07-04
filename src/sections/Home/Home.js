import React from "react"
import Info from "../../components/Info/Info"
import Search from "../../components/Search/Search"
import Illustration from "../../components/Illustration/Illustration"
import { Row, Col, Container } from "react-bootstrap"
import "./home.css"

export default function Home() {
    return (
        <Container fluid>
            <Row>
                <Col md={6}> <Info /></Col>
                <Col md={6}> <Illustration /></Col>
            </Row>
            {/* <Row>
                <Col md={12}> <Search /> </Col>
            </Row> */}
        </Container>
    )
}