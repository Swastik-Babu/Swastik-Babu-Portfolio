import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing" >
        <div className="card-container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="btc">Rs 200</p>
                <p>-3days-</p>
                <p>-3 pages-</p>
                <p>-Featured-</p>
                <p>-Responsive design-</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>

            </div>
            <div className="card">
                <h3>-mEDIUM-</h3>
                <span className="bar"></span>
                <p className="btc">Rs 500</p>
                <p>-3days-</p>
                <p>-3 pages-</p>
                <p>-Featured-</p>
                <p>-Responsive design-</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>

            </div>
            <div className="card">
                <h3>-Premium-</h3>
                <span className="bar"></span>
                <p className="btc">Rs 1000</p>
                <p>-3days-</p>
                <p>-3 pages-</p>
                <p>-Featured-</p>
                <p>-Responsive design-</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>

            </div>

        </div>
    </div>
  )
}

export default PricingCard