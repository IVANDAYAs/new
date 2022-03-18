import React from "react";
import "./know.css";

export default function(){
    return(
        <div className="trial row">
            <div className="col-lg-6 tleft">
                <h1><b>The 7 days trial</b></h1>
                <h4>Our experts included sustainability into fitness</h4>
                <h6>Know what you are signing up for</h6>
                <h6>A little skeletal of the 7 day free trial of Sustainable fitness</h6>
                <ul className="listt">
                    <li><b>1st day</b> - Assessment and personalised programs</li>
                    <li><b>2nd day</b> - S&C</li>
                    <li><b>3rd day</b> - HIIT</li>
                    <li><b>4th day</b> - Cardio vascular endurance training</li>
                    <li><b>5th day</b> - Yoga & mindfulness</li>
                    <li><b>6th day</b> - choose any from the above</li>
                    <li><b>7th day</b> - Webinar on sustainability and sustainable living</li> 
                </ul>
            </div>
            <div  className="d-grid gap-2 col-6 mx-auto tright">
                <a href="/register"><button className="btn-lg trbtn ">Sign up</button></a>
            </div>
        </div>
    );
}