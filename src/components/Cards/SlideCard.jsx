import React from "react";
import "./slidecard.css";

import profile from "../../images/profile.jpg";

export default function SlideCard() {
    return (
        <div className="slidecard">
            <div className="slidecard-image">
                <img className="slidecard-image--profile" src={profile} alt=""/>
            </div>
            <div className="slidecard-info">
                <div className="slidecard-info--name">
                    <h1>John Doe</h1>
                </div>
                <div className="slidecard-info--title">
                    <p>Web Developer</p>
                </div>
                <div className="slidecard-info--description">
                    <p>
                        I am a web developer and I am passionate about web development.
                        I have a passion for creating websites and web applications.
                    </p>
                </div>
            </div>
        </div>
    )
}