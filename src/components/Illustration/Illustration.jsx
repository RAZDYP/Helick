import React from "react";
import frame from "../../images/laptop-man.png"
import "./illustration.css"

export default function Illustration() {
    return (
        <div className="illustration">
           <div className="illustration-container">
                <img className="illustration-frame" src={frame} alt="" />
           </div>
        </div>
    )
}