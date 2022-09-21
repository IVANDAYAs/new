import React from "react";
import "./trial.css";
import ab from "./images/about1.png"
export default function(){
    return(
        <div id="freetrial" className="trial row">
            <div className="col-lg-6 tleft">
                <h1><b>We are a data driven company.</b></h1>
                {/* <h4>Our experts included sustainability into fitness</h4> */}
                <h6>With some of the best fitness coaches and nutritionist on board, we house immense experience and subsequently data.The experience makes sure that your plan is chalked out keeping the follwing factors in mind.</h6>
                {/* <h6>A little skeletal of the 7 day free trial of Sustainable fitness</h6>
                <ul className="listt">
                    <li><b>1st day</b> - Assessment and personalised programs</li>
                    <li><b>2nd day</b> - S&C</li>
                    <li><b>3rd day</b> - HIIT</li>
                    <li><b>4th day</b> - Cardio vascular endurance training</li>
                    <li><b>5th day</b> - Yoga & mindfulness</li>
                    <li><b>6th day</b> - choose any from the above</li>
                    <li><b>7th day</b> - Webinar on sustainability and sustainable living</li> 
                </ul> */}
            </div>
            <div  className="col-lg-6 about1">
                <img src={ab}></img>
                <h6>All the above pivotal factors are categorised as pre-assessed data to yield maximum output.</h6>
            </div>
        </div>
    );
}