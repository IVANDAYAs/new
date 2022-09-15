import React from "react";
import "./cards.css";
import { Helmet } from "react-helmet";

export default function (props) {


    document.addEventListener("DOMContentLoaded", function () {
        const Script = document.createElement("script");
        //id should be same as given to form element
        const Form = document.getElementById(props.id);
        Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js');
        Script.setAttribute('data-payment_button_id', props.payId);
        Script.async = "true";
        Form.appendChild(Script);
    });


    return (
        <div className="pcard"  >
            <div className="oo">
                <h2><b>{props.name}</b></h2>
                <b><p>{props.discount}</p></b>

                <form id={props.id}  > </form>
            </div>
        </div>
    );
}