import React from "react"
import Info from "../../components/Home/Info"
import Illustration from "../../components/Home/Illustration"
import Search from "../../components/Search/Search"
import { Row, Col, Container } from "react-bootstrap"

export default function Home() {
    return (
        <Container fluid>
            <Row>
                <Col md={6}> <Info /></Col>
                <Col md={6}><Illustration /> </Col>
            </Row>
            <Row>
                <Col md={12}> <Search /> </Col>
            </Row>
        </Container>
    )
}