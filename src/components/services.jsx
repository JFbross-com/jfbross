import React, { Component } from "react";
// import { Link } from 'react-router-dom'

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              We Have expreineces in this services with the Best price and Best aquality.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3">
                    {" "}
               <a href={d.href}  >

                    <i  className={d.icon}></i>
               
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      
                      {/* <p>{d.text}</p> */}
                      
                      
                    </div>
                    </a> 
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
