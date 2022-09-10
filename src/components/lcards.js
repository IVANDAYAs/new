import React from "react";
import "./lcards.css";


export default function(props){
    return(
        <div className="lcards">
            <div className="lsush lsus-minor">
                <h5> {props.h} </h5>
            </div>
            <div className="container">
                <div className="lcarddown">
                    <div className=" lquote">
                        <h4><b>{props.quote}</b></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}