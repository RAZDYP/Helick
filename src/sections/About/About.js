import React from "react";
import "./about.css";
import { Row, Col, Container } from "react-bootstrap"

import {ReactComponent as Monitor} from "../../images/monitor.svg";

import AboutCard from "../../components/Cards/AboutCard";

export default function About() {
    return (
        <Container>
            <Row className="monitor-row">
                <Col lg={true}><Monitor className="monitor"/></Col>
            </Row>
            <Row>
                <Col lg={true}><AboutCard /></Col>
                <Col lg={true} style={{marginTop: "50px"}}><AboutCard /></Col>
                <Col lg={true}><AboutCard /></Col>
                <Col lg={true} style={{marginTop: "50px"}}><AboutCard /></Col>
            </Row>
        </Container>
    )
}