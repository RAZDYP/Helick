import React from 'react';
import "./aboutcard.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faRocket } from '@fortawesome/free-solid-svg-icons'

export default function AboutCard() {
    return (
        <div className='about-card'>
            <div className='about-card--icon'>
                <div className='about-card--icon--rocket'>
                    <FontAwesomeIcon className="faRocket" icon={faRocket} />
                </div>
            </div>
            <div className='about-card--title'>
                <h4>About</h4>
            </div>
            <div className='about-card--description'>
                <p>
                    Enthusiastic, thoughtful customer support with 24/7 service.
                </p>
            </div>
        </div>
    )
}