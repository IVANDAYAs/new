import React from "react";
import "./sbw.css";
import sbwimg from "./images/sbw.jpg";

export default function(){
    return(
        <div className="sbw">
            <div className="row">
                <div className="col-lg-6 sbwleft">
                    <div className="sbwh">
                        <h2><b>Come join us and learn the science behind working out and living a sustainable life.</b></h2>
                    </div>
                    <div >
                        <a href="/knowmore"><button type="button" class="btn btn-outline-secondary sbwbtn">know more</button></a>
                    </div>                  
                </div>
                <div className="col-lg-6 sbwright">
                    <img className="sbwimg" src={sbwimg}></img>
                </div>
            </div>
        </div>
    );
}