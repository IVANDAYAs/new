import React from "react";
import "./lsus.css";
import Lcards from "./lcards.js";
import Lsus1 from "./images/lsus1.png";
import Lsus2 from "./images/lsus2.png";
import Lsus3 from "./images/lsus3.png";

export default function(){
    return(
        <div id="sustainability" className="lsus">
            
           
            <div className="container lsusup">
                <div className="row">
                    <div className="col-lg-4 cardl">
                        <Lcards h="- Best in class coaches cater to all your fitness requirements after a thorough assessment of your fitness level.Every month new & modifies in-home workout routine is shared" quote="FITNESS" imagen={Lsus1} />
                    </div>
                    <div className="col-lg-4 cardl">
                        <Lcards h="- You are the product of what your body consumes.An expert nutritonist devises out a diet plan every month according to your preferences and food-habit." quote="DIET" imagen={Lsus2} />
                    </div>
                    <div className="col-lg-4 cardl">
                        <Lcards h="- A personalised health plan coupled with an expert diet plan to help you achieve all your fitness goals.Assessments will be done to formulate modified planse every month." quote="HEALTH" imagen={Lsus3} />
                    </div>                
                </div>
            </div>
        </div>
    );
}