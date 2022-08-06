import React from "react"
import "./slideinfo.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function SlideShow() {
    return (
        <div className="slideshow-info">
            <div className="slideshow-info--title">
                <h1>Get to know the team behind the scenes</h1>
            </div>
            <div className="slideshow-info--buttons">
                <div className="slideshow-info--buttons--arrow">
                    <FontAwesomeIcon className="faArrowLeft" icon={faArrowLeft} />
                </div>
                <div className="slideshow-info--buttons--arrow">
                    <FontAwesomeIcon className="faArrowRight" icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}