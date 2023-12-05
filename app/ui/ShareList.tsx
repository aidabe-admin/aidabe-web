"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function ShareList(){
    return(
        <div className="share-list-cont">
            <p>Compartir vía:</p>
            <ul className="share-list">
                <li className="share-btn"><FontAwesomeIcon icon={faLink} /></li>
                <li className="share-btn"><FontAwesomeIcon icon={faFacebookF} /></li>
                <li className="share-btn"><FontAwesomeIcon icon={faXTwitter} /></li>
            </ul>
        </div>
    )
}