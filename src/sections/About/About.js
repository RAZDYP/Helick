import React from "react";
import "./about.css";
import { Row, Col, Container } from "react-bootstrap"

import {ReactComponent as Monitor} from "../../images/monitor.svg";

import AboutCard from "../../components/Cards/AboutCard";
import SlideInfo from "../../components/Info/SlideInfo";
import SlideCard from "../../components/Cards/SlideCard";

export default function About() {
    return (
        <Container>
            <Row className="monitor-row">
                <Col lg={true}><Monitor className="monitor"/></Col>
            </Row>
            <Row>
                <Col lg={true}><AboutCard /></Col>
                <Col lg={true} className="card-about"><AboutCard /></Col>
                <Col lg={true}><AboutCard /></Col>
                <Col lg={true} className="card-about"><AboutCard /></Col>
            </Row>
            <Row>
                <Col lg={true}><SlideInfo /></Col>
                <Col lg={true}><SlideCard /></Col>
            </Row>
        </Container>
    )
}