import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './nav.css';

function nav() {
    return (
        <div className="nav-div">
            <ul className="nav-list">
                <li className="nav-item first"><p>BAM DETAILING</p></li>
                {/* <li className="nav-item"><p>test</p></li> */}
                <li className="nav-item"><button>Book Now</button></li>
            </ul>
        </div>
    )
}

export default nav