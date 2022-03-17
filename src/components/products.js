import React from "react";
import "./products.css";
import f1img from "./images/f1.png";
import f2img from "./images/f2.png";

export default function(){
    return(
        <div className="products">
            <div className="fph">
                <h1>FOOD PRODUCTS</h1>
            </div>
            <div className="row imgp">
                <div className="col-lg-6">
                    <img className="pimg" src={f1img}></img>
                    <h1>Sticky black rice</h1>
                    <p>The sweet, the sour and the healthy</p>
                    <p>₹749/kg</p>
                    <button type="button" class="btn btn-outline-secondary sbwbtn">BUY NOW</button>
                </div>
                <div className="col-lg-6">
                    <img className="pimg" src={f2img}></img>
                    <h1>Bitter gourd pickle</h1>
                    <p>We pack your memories in a jar</p>
                    <p>₹299/100gm</p>
                    <button type="button" class="btn btn-outline-secondary sbwbtn">BUY NOW</button>
                </div>
            </div>
           
        </div>
    );
}