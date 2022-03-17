import React from "react";
import "./cards.css";

export default function(props){
    return(
        <div className="pcard">
            <div className="oo">
                <h2><b>{props.name}</b></h2>
                <b><p>{props.discount}</p></b>
                <h4>{props.price} RUPEES</h4>
                <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_J7K3uCk9gptwjP" async> </script> </form>
            </div>
        </div>
    );
}