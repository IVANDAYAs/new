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
                <div className=" p1 col-lg-6">
                    <img className="primg" src={f1img}></img>
                    <h3 className="p1h">Sticky black rice</h3>
                    <p>The sweet, the sour and the healthy</p>
                    <h6>₹749/kg</h6>
                    <button type="button" class="btn btn-outline-secondary prbtn ">BUY NOW</button>
                </div>
                <div className="p2 col-lg-6">
                    <img className="primg" src={f2img}></img>
                    <h3 className="p2h">Bitter gourd pickle</h3>
                    <p>We pack your memories in a jar</p>
                    <h6>₹299/100gm</h6>
                    <button type="button" class="btn btn-outline-secondary prbtn ">BUY NOW</button>
                </div>
            </div>
           
        </div>
    );
}