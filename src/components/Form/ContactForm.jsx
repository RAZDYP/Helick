import React from "react"
import "./contactform.css"

export default function ContactForm() {
    return (
        <div className="form-contact">
            <div className="form-contact--message">
                <h3> How can we help?</h3>
                <p>Send us a message!</p>
            </div>
            <div className="form-contact--input">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone Number" />
                <textarea rows="4" cols="50" placeholder="Type your query here."></textarea>

            </div>
            <div className="form-contact--button">
                <button>Send</button>
            </div>
        </div>
    )
}