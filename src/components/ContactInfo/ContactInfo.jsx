import React from "react";
import "./contactinfo.css";

import logo from "../../images/logo.png"
import email from "../../images/email.png"
import address from "../../images/address.png"
import phone from "../../images/phone.png"
import whatsapp from "../../images/whatsapp.png"

export default function ContactInfo() {
    return (
        <div className="contact-info">
            <h1> Get in touch </h1>
            <div className="contact-info--details">
                <div className="contact-info--details--all">
                    <img src={phone} alt="logo" width="40" height="40" />
                    <h5>Phone</h5>
                    <div className="numbers">
                        <h6>Phone : +917002043811 </h6>
                        <h6>Phone : +918486870444 </h6>
                    </div>

                </div>
                <div className="contact-info--details--all">
                    <img src={address} alt="logo" width="40" height="40" />
                    <h5>Address</h5>

                    <div className="real-address">
                        <h6>Rampur,Near KMK School</h6>
                        <h6>Hojai ,Assam 782435</h6>
                    </div>
                </div>
                <div className="contact-info--details--all">
                    <img src={email} alt="logo" width="40" height="40" />
                    <h5>Email</h5>
                    <div>
                        <h6>  info@helick.in</h6>
                        <h6>abhironi1@hotmail.com</h6>
                    </div>

                </div>

            </div>
            <div className="contact-info--whatsapp">
                <h6>To chat with us,</h6>
                <h6>Click on the icon below.</h6>
                <p>
                    <a href="https://wa.me/917002043811" rel="noreferrer" target="_blank"><img src={whatsapp} alt="logo" width="50" height="50" /></a>
                </p>


            </div>
        </div>
    )
}