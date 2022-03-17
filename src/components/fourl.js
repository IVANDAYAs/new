import React from "react";
import "./fourl.css";
import fourl from "./images/4l.png";

export default function(){
    return(
        <div id="fourl" className="fourl">
            <div className="container">
                <div className="row upfourl">
                    <div className="col-md-6 leftfourl">
                        <img className="flimg" src={fourl}></img>
                    </div>
                    <div className="col-md-6 rightfourl">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1piFN_ioMVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <button type="button" class="btn btn-outline-secondary fbtn">know more</button>
                    </div>
                </div>
            </div>
            
            <div className="downfourl">
                <h4>'TWIGS MIGHT GO DIFFERENT WAYS BUT THE ROOT LIES IN THE SAME HEART OF THE LAND.'</h4>
                <h5 className="fll">-An honest levitator</h5>
            </div>
            
        </div>
    );
}