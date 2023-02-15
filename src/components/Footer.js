import "./FooterStyles.css";

import React from 'react'
import {FaHome,FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaHackerrank} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                        <p> IIIT Bhubaneswar</p>
                        <p>Odisha,India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone  size={20} style={{color:"#fff",marginRight:"2rem"}} />
                8260616381</h4>
                

                </div>
                <div className="email">
                    <h4><FaMailBulk  size={20} style={{color:"#fff",marginRight:"2rem"}} />
                swastikbabu.sb@gmail.com</h4>
                

                </div>


            </div>
            <div className="right">
                <h4>About Me </h4>
                <p>This is Swastik Babu.A pre final year student at IIIT BBSR.I enjoy sharpening my skills in web dev and engaging my mind into solving tricky problems related to DSA.</p>
                <div className="social">
                <FaLinkedin  size={30} style={{color:"#fff",marginRight:"1rem"}} />
                <FaGithub  size={30} style={{color:"#fff",marginRight:"1rem"}} />
                <FaHackerrank  size={30} style={{color:"#fff",marginRight:"1rem"}} />
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer