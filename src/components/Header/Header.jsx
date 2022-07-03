import React from "react";
import { Navbar, Nav, Dropdown, Container, NavDropdown } from 'react-bootstrap'
import { Link, Redirect, useHistory } from 'react-router-dom'
import logo from "../HELLICK-2-1.png"
import "./header.css"

export default function Header() {
    return (
        // <header>
        //     <span className='nav1con'>
        //         <Navbar className="navbaar" variant="dark" >
        //             <Container>
        //                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //                 {/* <div className="logo"> <a href="/"><img src={logo} alt="logo" width="140" height="60" /></a></div> */}
        //                 {/* <Navbar.Brand href="/" ><span className="name" >Helick</span></Navbar.Brand> */}
        //                 <Navbar.Brand href="#home">
        //                     <img
        //                         alt=""
        //                         src={logo}
        //                         width="140"
        //                         height="60"
        //                         className="d-inline-block align-top logo"
        //                     />
        //                 </Navbar.Brand>
        //                 <Navbar.Collapse id="basic-navbar-nav">
        //                     <Nav className='mx-auto naav'>
        //                         <Link to="/" ><span className="navlnk">Home</span></Link>
        //                         <Link to="/product" ><span className="navlnk">Product</span></Link>
        //                         <Link to="/partnership" ><span className="navlnk">Partnership</span></Link>
        //                         <Link to="/about" ><span className="navlnk">About Us </span></Link>
        //                         <Link to="/contact" ><span className="navlnk">Contact Us </span></Link>
        //                         <Link to="/demo"><span className="demo">Request A Demo </span></Link>
        //                     </Nav>
        //                 </Navbar.Collapse>
        //             </Container>
        //         </Navbar>
        //     </span>
        // </header>
        <header>
            <Navbar className="navbaar" expand="lg">
                <Container className="nav-container">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="140"
                            height="60"
                            className="d-inline-block align-top logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><span className="navlnk">Home</span></Nav.Link>
                            <Nav.Link href="#link"><span className="navlnk">Home</span></Nav.Link>
                            <Nav.Link href="#link"><span className="navlnk">Home</span></Nav.Link>
                            <Nav.Link href="#link"><span className="navlnk">Home</span></Nav.Link>
                            <Nav.Link href="#link"><span className="navlnk">Home</span></Nav.Link>
                            <Nav.Link href="#link"><span className="demo">Home</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}