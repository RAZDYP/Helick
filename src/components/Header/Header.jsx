import React from "react";
import { Navbar, Nav, Dropdown, Container, NavDropdown } from 'react-bootstrap'
import { Link, Redirect, useHistory } from 'react-router-dom'
import logo from "../helick-logo2.png"
import "./header.css"

export default function Header() {
    return (
        <header>
            <span className='nav1con'>
                <Navbar className="navbaar" variant="dark" >

                    <div className="logo"> <a href="/"><img src={logo} alt="logo" width="140" height="60" /></a></div>
                    {/* <Navbar.Brand href="/" ><span className="name" >Helick</span></Navbar.Brand> */}

                    <Nav className='mx-auto naav'>
                        <Link to="/" ><span className="navlnk">Home</span></Link>
                        <Link to="/product" ><span className="navlnk">Product</span></Link>
                        <Link to="/partnership" ><span className="navlnk">Partnership</span></Link>
                        <Link to="/about" ><span className="navlnk">About Us </span></Link>
                        <Link to="/contact" ><span className="navlnk">Contact Us </span></Link>
                    </Nav>
                </Navbar>
            </span>
        </header>
    );
}