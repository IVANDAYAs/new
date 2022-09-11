import React from "react";
import "./fourl.css";
// import fourl from "./images/4l.png";

export default function(){
    return(
        <div id="fourl" className="fourl">
            <div className="container">
                <div className="row upfourl">
                    <div className="col-md-6 leftfourl">
                        {/* <img className="flimg" src={fourl}></img> */}
                        <h1>Is training at home even effective ?</h1>
                        <h3>Yes and definitely a YES</h3>
                    </div>
                    <div className="col-md-6 rightfourl">
                        <p><strong>Affordability</strong>- Swipe down to view our prices</p>
                        <p><strong>Reliability</strong>- You can practice at your own comfort</p>
                        <p><strong>Accountability</strong>- You hold yourself accountable for the progress you make</p>
                        <a href="/knowmore"><button type="button" class="btn btn-outline-secondary fbtn">know more</button></a>
                    </div>
                </div>
            </div>
            
            {/* <div className="downfourl">
                <h4>'TWIGS MIGHT GO DIFFERENT WAYS BUT THE ROOT LIES IN THE SAME HEART OF THE LAND.'</h4>
                <h5 className="fll">-An honest levitator</h5>
            </div> */}
            
        </div>
    );
}