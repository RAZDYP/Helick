import React from "react";
import frame from "../../images/laptop-man.png"
import contact from "../../images/basketball.png"
import "./illustration.css"
import { useLocation } from "react-router-dom"

export default function Illustration(props) {
    const location = useLocation()

    console.log(location.pathname)

    return (
        <div className="illustration">
           <div className="illustration-container">
                <img className="illustration-frame" src={frame} alt="" />
           </div>
        </div>
    )
}