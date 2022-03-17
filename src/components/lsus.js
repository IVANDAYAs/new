import React from "react";
import "./lsus.css";
import Lcards from "./lcards.js";
import Lsus1 from "./images/lsus1.png";
import Lsus2 from "./images/lsus2.png";
import Lsus3 from "./images/lsus3.png";

export default function(){
    return(
        <div id="sustainability" className="lsus">
            <div className="lsus-top">
                <h1>THE LIVECO <br/> SUSTAINABILITY</h1>
            </div>
           
            <div className="container lsusup">
                <div className="row">
                    <div className="col-lg-4 cardl">
                        <Lcards h="- Fitness and ways to stay healthy value mental health and well being." quote="STAY WELL" imagen={Lsus1} />
                    </div>
                    <div className="col-lg-4 cardl">
                        <Lcards h="- Focuses on farming techniques, fishing techniques, local, homegrown, micro macronutrients, ancient food recipes." quote="EAT BETTER" imagen={Lsus2} />
                    </div>
                    <div className="col-lg-4 cardl">
                        <Lcards h="- Recycled,up-cycled,indigenous textiles (homegrown)" quote="WEAR BETTER" imagen={Lsus3} />
                    </div>                
                </div>
            </div>
        </div>
    );
}