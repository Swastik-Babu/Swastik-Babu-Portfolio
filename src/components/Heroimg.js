import "./HeroimgStyles.css";

import React from 'react'
import IntroImg from "../assets/wdimg.jpeg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img  className="intro-img"
             src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>
                HI, I'M A WEB DEV AND DSA ENTHUSIAST.
                <p>SKILLED IN -HTML,CSS,JS,DATA STRUCTURES</p>
            </p>
            <h1>
                
                REACT DEVELOPER
                  
            </h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
};

export default Heroimg;