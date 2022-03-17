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
                        <p>We help you explore the roots, we help you imbibe the finest practices of our forefathers.</p>
                        <p>We form Liveco, we are here to help you lead a sustainable lifestyle and develop in a wholistic sense</p>
                        <p>You are champions for sticking around and reading this through. You are the Levitators, the ones who plan to levitate themselves.</p>
                        <p>Everyone forms the community, the community which is inclusive and accepting, the community to which we give back a part of ourselves</p>
                        <a href="/knowmore"><button type="button" class="btn btn-outline-secondary fbtn">know more</button></a>
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