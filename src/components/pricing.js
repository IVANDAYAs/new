import React from "react";
import "./pricing.css";
import pricing from "./images/pricing.JPG";
import Cards from "./cards.js";

export default function () {

      
    return (
        <div id="pricing" className="pricing">
            <div className="ph">
                <h1>PRICING</h1>
            </div>


            <div className="container ">

                <div className="row pbottom">
                    <h4>1 fitness plan/month <br />+<br />1 nutrition plan/month</h4>
                    <div className=" col-lg-4">
                        <Cards name="Best-Value" discount="6 months" price="1999" id="donateFormOne" payId = "pl_KI3MYUwLKkxjNI" />
                    </div>
                    <div className=" col-lg-4">
                        <Cards name="Best-Seller" discount="3 months" price="1499" id="donateFormTwo" payId="pl_KI4scRV3EkzlSh"/>
                    </div>
                    <div className=" col-lg-4">
                        <Cards name="Normal pack" discount="1 month" price="599" id="donateFormThree" payId="pl_KI4xRaBTEv2tcF" />
                    </div>
                </div>

            </div>

            <div className="container ">

                <div className="row pbottom">
                    <h4>1 fitness plan/month <br />+<br />1 nutrition plan/month<br/>+<br/>1 doctor consultation/month</h4>
                    <div className=" col-lg-4">
                        <Cards name="Best-Value" discount="6 months" price="4999" id="donateFormFour" payId="pl_KI4z0MEmsXuL9F" />
                    </div>
                    <div className=" col-lg-4">
                        <Cards name="Best-Seller" discount="3 months" price="3499" id="donateFormFive" payId="pl_KI50GTu7mqY9Rk" />
                    </div>
                    <div className=" col-lg-4">
                        <Cards name="Normal pack" discount="1 month" price="1499" id="donateFormSix" payId="pl_KI51ziY1ETC3hC" />
                    </div>
                </div>

            </div>
            <Cards name="Normal pack" discount="1 month" price="1499" id="donateFormSix" payId="pl_KI5O6tN5TrRZWH" />
        </div>
    );
}