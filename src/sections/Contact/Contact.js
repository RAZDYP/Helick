import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import ContactForm from "../../components/Form/ContactForm"
import ContactInfo from "../../components/ContactInfo/ContactInfo"
import "./Contact.css"
import logo from "../../images/logo.png"
import email from "../../images/email.png"
import address from "../../images/address.png"
import phone from "../../images/phone.png"
import whatsapp from "../../images/whatsapp.png"

export default function Contact() {
    return (
        // <div className="container">
        //     <div className="login">
        //         <ContactInfo />
        //         <ContactForm />
        //     </div>
        // </div>
        <Container>
            <Row>
                <Col lg={true}> <ContactInfo /></Col>
                <Col lg={true}> <ContactForm /></Col>
            </Row>
        </Container>
    )                 
}

