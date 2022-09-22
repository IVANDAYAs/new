import React from "react";
import "./know.css";
import knowImg from "./images/know.jpeg";
import knowImg1 from "./images/know2.jpeg";

export default function () {
    return (
        <div >
            <div className="knowNav"></div>
            <div className="know">
                <h1>To get a sneak peak write to us.</h1>

                <a id="instak" href="https://instagram.com/fitnessdietandhealth_?igshid=YmMyMTA2M2Y="> <p className="social" > <i class="col fa-1x fa-brands fa-instagram"></i> Instagram  </p>  </a>
                <a id="mailk" href="mailto:fitnessdietandhealth.india@gmail.com"> <p className="social" > <i class="col fa-2x fa-solid fa-envelope"></i> Email  </p>  </a>
                <img src={knowImg}></img>
                <img src={knowImg1}></img>
            </div>
        </div>
    );
}