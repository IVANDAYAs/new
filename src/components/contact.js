import React from "react";
import "./contact.css";


function Contact(){
    return(
        <div id="contact" className="contact">
            <div className="container">

                <div className="row">

                    <div className="col col-lg-6 col-md-6 col-sm-12">

                        <div className="ch">
                            <h1>Let's work together! </h1>
                        </div>

                        <div className="cs">
                        
                            <h5>FIND US ON</h5>
                            <h4>SOCIAL MEDIA</h4><br></br>                               
                                <a id="insta" href="http://instagram.com"> <p className="social" > <i class="col fa-1x fa-brands fa-instagram"></i> Instagram  </p>  </a>                              
                                <a id="facebook" href="http://instagram.com"> <p className="social" > <i class="col fa-2x fa-brands fa-facebook"></i>  Facebook   </p>  </a>
                                <a id="linkedIn" href="http://instagram.com"> <p className="social" > <i class="col fa-2x fa-brands fa-linkedin"></i>  LinkedIn   </p>  </a>
                        </div>

                    </div>

                    <div className="col cr col-lg-6 col-md-6 col-sm-12">
                        <h4>EMAIL US</h4>
                        <p>liveco@letsliveco.in</p>
                        <h4>GIVE US A CALL</h4>
                        <p>+91 853296120</p>
                    </div>

                </div>
            </div>
            
        </div>
       
    );
}

export default Contact