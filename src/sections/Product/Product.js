import React from "react"

import { Row, Col, Container } from "react-bootstrap"
import ProductCard from "../../components/ProductCard/ProductCard"

export default function Product() {
    return (
        <Container>
            <Row><h1>Our Products</h1></Row>
            <Row>
                <Col lg={true}><ProductCard /></Col>
                <Col lg={true}><ProductCard /></Col>
            </Row>

        </Container>
    )
}