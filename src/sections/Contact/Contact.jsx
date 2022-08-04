import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import "./Contact.css"
import logo from "../../images/logo.png"
import email from "../../images/email.png"
import address from "../../images/address.png"
import phone from "../../images/phone.png"






export default function Contact() {
    return (








        // {/* <!-- Web Fonts  */}
        // {/* ================================================== --> */}
        // <Link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        //     rel="stylesheet" />
        // <Link href="https://fonts.googleapis.com/css?family=Pinyon+Script" rel="stylesheet">
        //     <Link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>

        //         {/* <!-- CSS */}
        //         {/* ================================================== --> */}
        // <Link rel="stylesheet" href="../css/bootstrap.min.css" />
        // <Link rel="stylesheet" href="../css/font-awesome.min.css" />
        // <Link rel="stylesheet" href="../css/jquery.webui-popover.css" />
        // <Link rel="stylesheet" href="css/style.css" /> 
        // <Link rel="stylesheet" href="../css/jquery.fancybox.min.css" />
        // <Link rel="stylesheet" href="../css/login.css" />



        <div className="container">
            <div className="login">
                <div className="login-description">
                    <h1> Get in touch </h1>
                    <div className="contact-details">
                        <div className="phone-details all-details">
                            <img src={phone} alt="logo" width="40" height="40" />
                            <h5>Phone</h5>
                            <div className="numbers">
                                <h6>Phone : +917002043811 </h6>
                                <h6>Phone : +918486870444 </h6>
                            </div>

                        </div>
                        <div className="address-details all-details">
                            <img src={address} alt="logo" width="40" height="40" />
                            <h5>Address</h5>

                            <div className="real-address">
                                <h6>Rampur,Near KMK School</h6>
                                <h6>Hojai ,Assam 782435</h6>
                            </div>
                        </div>
                        <div className="email-details all-details">
                            <img src={email} alt="logo" width="40" height="40" />
                            <h5>Email</h5>
                            <div>
                                <h6>  info@helick.in</h6>
                                <h6>abhironi1@hotmail.com</h6>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="login-info">
                    <div className="help-message">
                        <h3> How can we help?</h3>
                        <p>Send us a message!</p>
                    </div>
                    <div className="login-info--input">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone Number" />
                        <textarea rows="4" cols="50" placeholder="Type your query here."></textarea>

                    </div>
                    <div className="login-info--button">
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>

        // {/* <script src="../js/jquery.min.js"></script>
        // <script src="../js/popper.min.js"></script>
        // <script src="../js/bootstrap.min.js"></script>
    )                           // <script src="../js/plugins.js"></script> */}




}

