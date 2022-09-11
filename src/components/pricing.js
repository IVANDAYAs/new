import React from "react";
import "./pricing.css";
import pricing from "./images/pricing.JPG";
import Cards from "./cards.js";

export default function () {
    return (
        <div id="pricing" className="pricing">
            <div className="ph">
                <h1>PRICING</h1>
                {/* <div className="pd">
                    <h3>Be fit without breaking the bank</h3>
                </div> */}
            </div>
            {/*             
            <div className="container pmiddle">
                <div className="row">
                    <div className="col-md-6 pmleft">
                        <img className="pimg" src={pricing}></img>
                    </div>
                    <div className="col-md-6 pmright">
                        <h2 className="pmrh"><b>GOLD PACK</b> - 2499 Rupees</h2>
                        <p className="pmrp">24 live classes.<br/>Access to all our pre-recorded classes.<br/>Get a pass to the community-driven programmes.<br/>Get indulged in co-cuuricular activities.<br/>Brand connisure programme.<br/>Subscription to our newsletter.<br/>Nutritionist consultation. </p>
                    </div>
                </div>
            </div> */}


            <div className="container ">

                <div className="row pbottom">
                    <h4>1 fitness plan/month <br />+<br />1 nutrition plan/month</h4>
                    <div className=" col-lg-4">
                        <Cards name="Best-Value" discount="6 months" price="1999" />
                    </div>
                    <div className=" col-lg-4">
                        <Cards name="Best-Seller" discount="3 months" price="1499" />
                    </div>
                    <div className=" col-lg-4">
                        <Cards name="Normal pack" discount="1 month" price="599" />
                    </div>
                </div>

            </div>

            <div className="container ">

                <div className="row pbottom">
                    <h4>1 fitness plan/month <br />+<br />1 nutrition plan/month<br/>+<br/>1 doctor consultation/month</h4>
                    <div className=" col-lg-4">
                        <Cards name="Best-Value" discount="6 months" price="4999" />
                    </div>
                    <div className=" col-lg-4">
                        <Cards name="Best-Seller" discount="3 months" price="3499" />
                    </div>
                    <div className=" col-lg-4">
                        <Cards name="Normal pack" discount="1 month" price="1499" />
                    </div>
                </div>

            </div>

        </div>
    );
}