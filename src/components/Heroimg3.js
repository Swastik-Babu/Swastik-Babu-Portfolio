import "./Heroimg3Styles.css";

import React,{Component} from 'react'

class Heroimg3 extends Component {
    render(){
        return (
            <div className="hero-img3">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )

    }
  
}

export default Heroimg3