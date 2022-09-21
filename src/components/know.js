import React from "react";
import "./know.css";
import knowImg from "./images/know.jpeg";
import knowImg1 from "./images/know2.jpeg";

export default function () {
    return (
        <div >
            <div className="knowNav"></div>
            <div className="know">
                <img src={knowImg}></img>
                <img src={knowImg1}></img>
            </div>
        </div>
    );
}